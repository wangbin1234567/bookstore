<template>
  <div class="ant-layout">
    <h2>班级管理</h2>
    <div
      class="ant-layout-content"
      style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;"
    >
      <div class="style_container__2hI6B" style="padding: 0px;">
        <div class="style_buttons__z2xtt">
          <button class="ant-btn-primary" @click="handleAddGrade('ruleForm')">添加班级</button>
        </div>
        <el-table :data="gradeList" style="width: 100%">
          <el-table-column label="班级名">
            <template slot-scope="scope">
              <span>{{ scope.row.grade_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="课程名">
            <template slot-scope="scope">
                  <span size="medium">{{ scope.row.subject_text }}</span>
            </template>
          </el-table-column>
          <el-table-column label="教室号">
            <template slot-scope="scope">
                  <span size="medium">{{ scope.row.room_text }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- Form -->
<el-dialog :title="title" :visible.sync="dialogFormVisible">
  <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm">
    <el-form-item label="班级名" :style="{width: formLabelWidth}" prop="name">
      <el-input v-model="ruleForm.name" placeholder="班级名" :disabled="disabled" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="教室号" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择教室号" :style="{width: formLabelWidth}">
        <el-option :label="item.room_text" :value="item.room_id" v-for="(item,index) in roomList" :key="index"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="课程名" prop="desc">
      <el-select v-model="ruleForm.desc" placeholder="请选择课程名" :style="{width: formLabelWidth}">
        <el-option :label="val.subject_text" :value="val.subject_id" v-for="(val,ind) in subjectList" :key="ind"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleConfirm('ruleForm')">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import { createGrade, updateGrade, deleteGrade } from '@/api/grade'
export default {
  computed: {
    //获取数据
    ...mapState({
      gradeList: state=>state.grade.gradeList,
      roomList: state=>state.room.roomList,
      subjectList: state=>state.subject.subjectList
    })
  },
  data() {
    return {
        disabled: false,
        title: "添加班级",
        dialogFormVisible: false,
        labelPosition: 'top',
        ruleForm: {
          name: '',
          region: '',
          desc: '',
          id: ''
        },
        formLabelWidth: '70%',
         rules: {
          name: [
            { required: true, message: '请输入班级名' }
          ],
          region: [
            { required: true, message: '请选择教室号' }
          ],
          desc: [
            { required: true, message: '请选择课程名' }
          ]
        }
    }
  },
  methods: {
    handleAddGrade(formName){
      this.dialogFormVisible = true
      this.title="添加班级"
      this.disabled=false
      this.$refs[formName].resetFields()
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true
      this.title="修改班级"
      this.disabled=true
      this.ruleForm.name=row.grade_name
      this.ruleForm.region=row.room_id
      this.ruleForm.desc=row.subject_id
      this.ruleForm.id=row.grade_id
    },
    handleDelete(index, row) {
      console.log(index, row);
      deleteGrade(row.grade_id).then(()=>{
          this.getGrade()
      })
    },
    handleConfirm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            if(this.title=="添加班级"){
               let params={ }
            params.grade_name	=this.ruleForm.name
            params.room_id=this.ruleForm.region
            params.subject_id=this.ruleForm.desc 
            createGrade(params).then(res=>{
               this.getGrade()
            })
            }else{
               let params ={}
            params.grade_name	=this.ruleForm.name
            params.room_id=this.ruleForm.region
            params.subject_id=this.ruleForm.desc  
            params.grade_id=this.ruleForm.id  
            updateGrade(params).then(res=>{
               this.getGrade()
            }) 
            }
            this.dialogFormVisible = false 
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }, 
    ...mapActions({
      getGrade: "grade/getGrade",
      getRoom: "room/getRoom",
      getSubject: "subject/getSubject"
    })
  },
  mounted(){
    this.getGrade()
    this.getRoom()
    this.getSubject()
  }
};
</script>

<style lang="scss" scoped>
.ant-layout {
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  padding: 0 24px 24px;
  h2 {
    padding: 20px 0;
    margin: 10px 0 10.5px;
    font-size: 21px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    height: 71px;
  }
  .ant-layout-content {
    flex: auto;
    min-height: 0;
  }
}
.style_container__2hI6B {
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  margin: 0 0 20px;
}
.style_buttons__z2xtt {
  height: 40px;
  margin: 0 0 25px;
}
.ant-btn-primary {
  width: 158px;
  height: 40px;
  margin: 0 10px 0 0;
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(-90deg, #4e75ff, #0139fd);
}
</style>
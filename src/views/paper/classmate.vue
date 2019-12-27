<template>
  <div class="ant-layout">
     <h2></h2>
     <div class="ant-layout-header">
      <el-form :inline="true" :model="ruleForm" class="demo-form-inline" ref="ruleForm">
          <el-form-item prop="region" label="状态">
            <el-select v-model="ruleForm.region" placeholder="请选择状态">
              <el-option :label="item" :value="item" v-for="(item,index) in statusList" :key="index"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item prop="desc" label="班级">
            <el-select v-model="ruleForm.desc" placeholder="请选择班级">
               <el-option :label="val" :value="val" v-for="(val,ind) in gradeListItem" :key="ind"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
     </div>
    <div
      class="ant-layout-content"
      style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;"
    >
      <div class="style_container__2hI6B" style="padding: 0px;">
         <div class="box">试卷列表</div>
        <el-table :data="studentMateList.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
            <el-table-column label="班级">
            <template slot-scope="scope">
              <span size="medium">{{ scope.row.grade_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <span>{{ scope.row.student_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="开始时间">
            <template slot-scope="scope">
              <span size="medium">{{ scope.row.start_time }}</span>
            </template>
          </el-table-column>
           <el-table-column label="结束时间">
            <template slot-scope="scope">
              <span size="medium">{{ scope.row.end_time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="阅卷状态">
            <template slot-scope="scope">
              <span size="medium">{{scope.row.status?"已阅":"未阅"}}</span>
            </template>
          </el-table-column>
          <el-table-column label="成绩">
            <template slot-scope="scope">
              <span size="medium">{{scope.row.score}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">批卷</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="studentMateList.length">
    </el-pagination>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    //获取数据
    ...mapState({
      studentMateList: state=>state.classmate.studentMateList,
      gradeListItem: state=>state.grade.gradeListItem,
      statusList: state=>state.classmate.statusList 
    })
  },
  data() {
    return {
        ruleForm: {
          user: '',
          region: '',
          desc: ''
        },
        currentPage: 1,
        pageSize: 10
    };
  },
  methods: {
    ...mapActions({
      getStudentMate: "classmate/getStudentMate",
      getGrade: "grade/getGrade"
    }),
     onSubmit() {
        console.log('submit!');
        if(this.ruleForm.user||this.ruleForm.region||this.ruleForm.desc){
                 let params={ }
            params.student_name	=this.ruleForm.user
            params.room_text=this.ruleForm.region
            params.grade_name=this.ruleForm.desc 
           this.searchStudent(params)
        }else{
           this.getStudent()
        }
      },
       resetForm(formName) {
        this.$refs[formName].resetFields()
      },
       handleDelete(index, row) {
        console.log(index, row);
        let exam_student_id=row.exam_student_id
        this.$router.push({path: "/paper/detail",
        query: {
           exam_student_id
        }
       })

      },
      handleSizeChange(val){
        this.pageSize=val
      },
      handleCurrentChange(val){
         this.currentPage=val
      }
  },
  mounted() {
    this.getGrade()
    this.getStudentMate(this.$route.query.grade_id)
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
    height: 40px;
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
.ant-layout-header{
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  margin: 0 0 20px;
}
.box{
  margin-bottom: 20px;
}
</style>
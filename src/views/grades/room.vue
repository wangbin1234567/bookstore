<template>
  <div class="ant-layout">
    <h2>教室管理</h2>
    <div
      class="ant-layout-content"
      style="background: rgb(255, 255, 255); padding: 24px; margin: 0px 0px 20px; border-radius: 10px;"
    >
      <div class="style_container__2hI6B" style="padding: 0px;">
        <div class="style_buttons__z2xtt">
          <button class="ant-btn-primary" @click="handleAddGrade('ruleForm')">添加教室</button>
        </div>
        <el-table :data="roomList" style="width: 100%">
          <el-table-column label="教室号">
            <template slot-scope="scope">
                  <span size="medium">{{ scope.row.room_text }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- Form -->
<el-dialog :title="title" :visible.sync="dialogFormVisible">
  <el-form :model="ruleForm" :label-position="labelPosition" ref="ruleForm">
    <el-form-item label="教室号" :style="{width: formLabelWidth}"
    prop="name"
    :rules="[
      { required: true, message: '请输入教室号'},
      { type: 'number', message: '教室号必须为数字值'}
    ]"
    >
      <el-input v-model.number="ruleForm.name" placeholder="教室号" auto-complete="off" type="name"></el-input>
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
import { createRoom, deleteRoom } from '@/api/room'
export default {
  computed: {
    //获取数据
    ...mapState({
      roomList: state=>state.room.roomList
    })
  },
  data() {
    return {
        disabled: false,
        title: "添加教室",
        dialogFormVisible: false,
        labelPosition: 'top',
         ruleForm: {
          name: ''
        },
        formLabelWidth: '70%'
    }
  },
  methods: {
    handleAddGrade(formName){
      this.dialogFormVisible = true
      this.$refs[formName].resetFields()
    },
    handleDelete(index, row) {
      console.log(index, row);
      // deleteRoom(row.room_id)
      // this.getRoom()
       this.$confirm('确定要删除此教室吗?',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true,
          showClose: false
        }).then(() => {
        deleteRoom(row.room_id).then(()=>{
           this.getRoom()
        })
          this.$message({
            type: 'success',
            message: '删除成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    handleConfirm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            let params={ }
            params.room_text=this.ruleForm.name+""
            createRoom(params).then(res=>{
              this.getRoom()
            })  
            this.dialogFormVisible = false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }, 
    ...mapActions({
      getRoom: "room/getRoom"
    })
  },
  mounted(){
    this.getRoom()
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
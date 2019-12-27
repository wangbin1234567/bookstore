<template>
  <div class="ant-layout">
    <h2>阅卷</h2>
    <div class="box">
    <div
      class="ant-layout-content"
      style="background: rgb(255, 255, 255); padding: 24px;border-radius: 10px;"
    >
     <span>{{studentPageList.student_name}}</span> 
    </div> 
    <div class="style_container__2hI6B">
         <div class="block">
    <el-slider v-model="value2" show-input :show-input-controls="flag"></el-slider>
  </div>
     <el-button type="primary" @click="open6">确定</el-button>
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
      studentPageList: state=>state.detail.studentPageList
    })
  },
  data() {
    return {
           value2: 0,
           flag: false
    };
  },
  methods: {
    ...mapActions({
      getStudentPage: "detail/getStudentPage"
    }),
     open6() {
        this.$confirm(`分数值是${this.value2}`, '确定提交阅卷结果吗?',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: '',
          center: true,
          showClose: false
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
      }
  },
  mounted() {
    this.getStudentPage(this.$route.query.exam_student_id)
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
    width: 70%;
  }
}
.style_container__2hI6B {
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  width: 30%;
  margin-left: 10px;
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
.box{
  display: flex;
}
</style>
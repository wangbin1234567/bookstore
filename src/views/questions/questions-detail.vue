<template>
  <div class="ant-layout">
    <h2>试题详情</h2>
    <div class="ant-layout-flex">
      <div class="ant-layout-content ant-left">
        <div>
          <h5>出题人：{{questionsDetail.user_name}}</h5>
        </div>
        <h3>题目信息</h3>
        <div>
          <p>
            <span>{{questionsDetail.questions_type_text}}</span>
            <span>{{questionsDetail.subject_text}}</span>
            <span>{{questionsDetail.exam_name}}</span>
          </p>
        </div>
        <div>
          
          <pre>{{questionsDetail.questions_stem}}</pre>
        </div>
        <div>
          <span>实例1：</span>
        </div>
      </div>
      <div class="ant-layout-content ant-right">
        <h4>答案信息</h4>
        <div>
          <pre style>
                {{questionsDetail.questions_answer}}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {},
  data() {
    return {
      questionsDetail: JSON.parse(sessionStorage.getItem("questionsDetail"))
    };
  }
};
</script>

<style lang="scss" scoped>
.ant-layout {
  width: 100%;
  height: 100%;
  padding: 0 24px 24px;
  h2 {
    padding: 20px 0;
    font-weight: 400;
    margin-top: 10px;
  }
}
.ant-layout-content {
  flex: auto;
  background: #ffffff;
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
  min-height: 0;
}
.ant-layout-flex {
  display: flex;
}
.ant-layout-flex .ant-left {
  width: 60%;
  margin-right: 3%;
}
.ant-layout-flex .ant-right {
  width: 37%;
}
</style>
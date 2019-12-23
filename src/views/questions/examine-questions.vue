<template>
  <div class="ant-layout">
    <h2>查看试题</h2>
    <div class="ant-layout-content">
      <div class="style_container__2hI6B">
        <form>
          <div style="width:100%">
            <div class="style_container_content">
              <div class="style_container_left">课程类型：</div>
              <div class="style_container_right">
                <ul>
                  <li>all</li>
                  <li v-for="(item,index) in testSubjectList" :key="index" @click="typeColor(index)" :class="{'list_color':curIndex==index}">{{item.subject_text}}</li>
                </ul>
              </div>
            </div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="考试类型">
                <el-select v-model="formInline.region">
                  <el-option
                    :label="ite.exam_name"
                    :value="ite.exam_id"
                    v-for="(ite,key) in testGenreList"
                    :key="key"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="题目类型">
                <el-select v-model="formInline.region1">
                  <el-option
                    :label="ite.questions_type_text"
                    :value="ite.questions_type_id"
                    v-for="(ite,key) in testList"
                    :key="key"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>
          </div>
        </form>
      </div>
      <div class="container_botton_content">
          <div class="container_botton_left" v-for="(item,index) in estConditionList" :key="index">
              <div>
                <h5>{{item.title}}</h5>
                <p><span  class="span_color span_border">{{item.questions_type_text}}</span><span  class="span_color span_border">{{item.subject_text}}</span><span class="spam_color_type">{{item.exam_name}}</span></p>
                <p><span class="span_color">{{item.user_name}}</span><span class="span_color">发布</span></p>
              </div>
              <div class="bianji">
                <a href="" class="span_color">编辑</a>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      testGenreList: state => state.test.testGenreList,
      testSubjectList: state => state.test.testSubjectList,
      testList: state => state.test.testList,
      estConditionList: state => state.test.estConditionList
    })
  },
  methods: {
    ...mapActions({
      testGenre: "test/testGenre",
      testSubject: "test/testSubject",
      testManagement: "test/testManagement",
      testCondition: 'test/testCondition',
      testInquire: 'test/testInquire'
    }),
    typeColor(index){
      // e.target.classname.toggle('.list_color')
      if(index==this.curIndex){
        this.curIndex=null
      }else{
        this.curIndex=index
      }
      
      console.log(index)
    },
    onSubmit() {
      let formInline=this.formInline
      let subject= this.testSubjectList[this.curIndex].subject_id
      formInline.subjects=subject
      console.log(formInline)
      this.testInquire(formInline)
    }
  },
  mounted() {
    this.testGenre();
    this.testSubject();
    this.testManagement();
    this.testCondition();
  },
  data() {
    return {
      formInline: {
        region: "",
        region1: ""
      },
      curIndex:null
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
.list_color{
  background: #0139FD;
  color: #ffff;
  padding: 4px;
}
.ant-layout-content {
  flex: auto;
  // background: rgb(255, 255, 255);
}
.spam_color_type{
  border: 1px solid #dd5f15;
  padding: 3px;
  color: #dd5f15;
  border-radius: 4px;
}
.span_color{
  color: #2427ee;
}
.bianji{
  margin: auto 0;
  font-size: 14px;
}
.style_container__2hI6B,.container_botton_content{
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
  min-height: 0;
}
.span_border{
  border: 1px solid #2427ee;
  padding: 3px;
  border-radius: 4px;
}
.container_botton_left{
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  span{
    margin-right:15px;
  }
}
.ant-from {
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
.style_container_content {
  margin-bottom: 20px;
}
.style_container_content {
  width: 100%;
  display: flex;
  .style_container_right {
    ul {
      li {
        float: left;
        margin: 0 10px;
      }
    }
  }
}
</style>
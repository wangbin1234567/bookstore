<template>
  <div class="ant-layout">
    <h2>添加试题</h2>
    <div class="ant-layout-content">
      <div>
        <form action class="ant-form ant-form-vertical">
          <h3>题目信息</h3>
          <div class>题干</div>

          <div style="height:40px;marginTop:10px;">
            <el-input
              v-model="total.input"
              placeholder="请输入目标标题,不超过20字"
              @change="change({
                   data:e.target.value
                 })"
            ></el-input>
          </div>
          <div class="ant-form-item-label">题目主题</div>
          <div class="ant-row ant-form-item">
            <div class="for-container">
              <div class="for-controlbar-lis">
                <ul>
                  <li title="上一步 (ctrl+z)">
                    <i class="icon ion-ios-undo"></i>
                  </li>
                  <li title="上一步 (ctrl+z)">
                    <i class="icon ion-ios-redo"></i>
                  </li>
                  <li>H1</li>
                  <li>H2</li>
                  <li>H3</li>
                  <li>H4</li>
                </ul>
              </div>
              <div class="for-editor">
                <div class="for-editor-block">
                  <ul class="for-line-num">
                    <li>1</li>
                  </ul>
                  <div class="for-editor-content">
                    <pre></pre>
                    <textarea placeholder="请输入内容" v-model="total.textarea1"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-form-item-label">请选择考试类型</div>
          <!-- <select name="" id=""></select> -->
          <div>
            <el-select v-model="total.value" placeholder="请选择">
            <el-option
              v-for="item in testGenreList"
              :key="item.value"
              :label="item.exam_name"
              :value="item.exam_id"
            ></el-option>
          </el-select>
          </div>
           <div class="ant-form-item-label">请选择课程类型</div>
          <!-- <select name="" id=""></select> -->
          <div>
            <el-select v-model="total.value1" placeholder="请选择" >
            <el-option
              v-for="item in testSubjectList"
              :key="item.value"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
          </div>
           <div class="ant-form-item-label">请选择题目类型</div>
          <!-- <select name="" id=""></select> -->
          <div>
            <el-select v-model="total.value2" placeholder="请选择">
            <el-option
              v-for="item in testList"
              :key="item.value"
              :label="item.questions_type_text"
              :value="item.questions_type_id"
            ></el-option>
          </el-select>
          </div>
          <div class="ant-form-item-label">题目主题</div>
          <div class="ant-row ant-form-item">
            <div class="for-container">
              <div class="for-controlbar-lis">
                <ul>
                  <li title="上一步 (ctrl+z)">
                    <i class="icon ion-ios-undo"></i>
                  </li>
                  <li title="上一步 (ctrl+z)">
                    <i class="icon ion-ios-redo"></i>
                  </li>
                  <li>H1</li>
                  <li>H2</li>
                  <li>H3</li>
                  <li>H4</li>
                </ul>
              </div>
              <div class="for-editor">
                <div class="for-editor-block">
                  <ul class="for-line-num">
                    <li>1</li>
                  </ul>
                  <div class="for-editor-content">
                    <pre></pre>
                    <textarea placeholder="请输入内容" v-model="total.textarea2"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-button type="primary" style="marginButton:100px;" @click="open2">提交</el-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data() {
    return {
      total:{
        input: "",
        value: "",
        value1: "",
        value2: "",
        textarea1:'',
        textarea2: '',
        userId:JSON.parse(sessionStorage.getItem("userInfo")).user_id||''
      },
      
    };
  },
  computed:{
    ...mapState({
      testGenreList:state=>state.test.testGenreList,
      testSubjectList:state=>state.test.testSubjectList,
      testList:state=>state.test.testList,
    })
  },
  
  methods:{
...mapActions({
      testGenre:'test/testGenre',
      testSubject: 'test/testSubject',
      testManagement: 'test/testManagement',
      addTestPort: 'test/addTestPort'
    }),
    // chang1(){
    //   console.log(222)
    //   this.testList.forEach((item,index)=>{
    //     console.log(item)
    //      console.log(item.questions_type_text,this.total.value2)
    //     if(item.questions_type_text==this.total.value2){
         
    //       this.total.chang_type=this.testList[index].questions_type_id
    //     }
    //   })
    // },
    open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          let total=this.total
          this.addTestPort({total})
          // console.log(this.total)
        })
      }
  },
  mounted(){
    this.testGenre()
    this.testSubject()
    this.testManagement()
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
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
  min-height: 0;
}
.el-input {
  padding-left: 10px;
}
.el-input:hover {
  border: 1px solid #295eff;
  border-radius: 5px;
}
.ant-form-item {
  padding-bottom: 8px;
}
.for-container {
  width: 100%;
  border: 1px solid #555;
}
.for-controlbar-lis {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #555;
  ul {
    float: left;
    height: 100%;
    li:hover {
      background: #666;
    }
    li {
      align-items: center;
      padding: 4px 8px;
      float: left;
      margin: 8px 6px;
      border-radius: 4px;
      line-height: normal;
      font-size: 21px;
    }
  }
}
.ant-form-item-label {
  margin: 20px 0 10px;
}
.for-editor {
  width: 100%;
  padding: 0;
  justify-content: space-between;
  height: 100%;
  color: rgba(0, 0, 0, 0.65);
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  .for-editor-block {
    display: flex;
    justify-content: space-between;
    min-height: 100%;
    .for-line-num {
      list-style: none;
      background: #eee;
      padding: 8px 0 20%;
      min-width: 30px;
      text-align: center;
    }
    .for-editor-content {
      flex: 1;
      position: relative;
      height: 40px;
      width: 100%;
      margin-left: 10px;
      pre {
        padding: 8px 0;
        height: 100%;
        display: block;
        white-space: pre-wrap;
        word-wrap: break-word;
        visibility: hidden;
        margin: 0;
        font-family: inherit;
      }
      textarea {
        position: absolute;
        top: 0;
        bottom: 0;
        padding: 8px 0;
        font-family: inherit;
        display: block;
        height: 100%;
        width: 100%;
        overflow: hidden;
        resize: none;
        border: none;
        outline: none;
        font-size: inherit;
        color: rgba(0, 0, 0, 0.65);
        background: none;
        line-height: inherit;
      }
    }
  }
}
</style>

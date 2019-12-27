<template>
  <div class="test-wrap">
    <!-- 公共头部 -->
    <el-header>
        <PublicHeader :name="name" />
    </el-header>
    <section class="test-sec">
        <div class="test-list">
            <div class="test-type">
                <li>考试类型：</li>

                <!-- 考试类型的展示 -->
                <el-select v-model="typeValue" placeholder="请选择">
                    <ExamTypes></ExamTypes>
                </el-select>

                <li>课程：</li>
                <!-- 课程选择展示 -->
                <el-select v-model="courseValue" placeholder="请选择">
                    <ExamCourse></ExamCourse>
                </el-select>

                <!-- 查询按钮的展示 -->
                <el-button type="primary" icon="el-icon-search">查询</el-button>
            </div>
        </div>

      <div class="test-typ">
        <div class="head">
            <li>试卷列表</li>
            <div class="conent">
                <el-button size="mini">全部</el-button>
                <el-button size="mini">进行中</el-button>
                <el-button size="mini">已结束</el-button>
            </div>
        </div>
        <div class="main">
            <!-- 列表的渲染与展示 -->
            <el-table :data="examList" style="width: 100%">
                <el-table-column prop="title" label="试卷信息"></el-table-column>
                <el-table-column prop="grade_name" label="班级"></el-table-column>            
                <el-table-column prop="user_name" label="创建人"></el-table-column>
                <el-table-column prop="start_time" label="开始时间"></el-table-column>
                <el-table-column prop="end_time" label="结束时间"></el-table-column>
                <el-table-column prop="status" label="操作">
                    <span style="color: #409eff" @click="tabDetail">详情</span>
                </el-table-column>              
                   
            </el-table>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
//引入头部组件
import PublicHeader from "@/components/publicHeader/index"
//引入考试类型组件
import ExamTypes from "@/components/examTypes/index"
//引入课程组件
import ExamCourse from "@/components/examCourse/index"
import {mapState,mapActions} from "vuex"
export default {
  props: {
      data:Array
  },
  components: {
       PublicHeader,
       ExamTypes,
       ExamCourse
  },
  data() {
    return {
        typeValue:"",
        courseValue:"",
        name:"试卷列表",
        title:"",//试卷信息
        user_name:"",//创建人
        grade_name:"",//班级
        // start_time:null,//开始时间
        end_time:null,//结束时间
        status:""//操作
    }
  },
  computed: {
      ...mapState({
            examList:state=>state.getExam.examList,
            detailList:state=>State.examDetail.detailList,
            start_time:state=>state.getExam.start_time
      })
  },
  methods: {
       ...mapActions({
            getExam:"getExam/getExam",
            getW5tcy:"examDetail/getW5tcy"
        }),
        //点击详情按钮跳转到对应的详情页面
        tabDetail(){
            this.$router.push("detailTest")
            this.getW5tcy()
        }
  },
  created() {
        this.getExam()

        //时间戳转为标准时间，标准时间转为日期格式
        // this.start_time=this.examList.map((item,index)=>{
        //     return new Date(parseInt(item.start_time,10)).toLocaleString()
        // })
        // // console.log(this.examList)
        // console.log(this.start_time)
        this.end_time=this.examList.map((item,index)=>{
           return new Date(parseInt(item.end_time,10)).toLocaleString()           
        })
        // console.log(this.end_time)
  },
};
</script>
<style scoped lang="scss">
.test-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background:#f0f2f5;
    header {
        width: 100%;
        height: 45px;
        line-height: 65px;
    }
}
.test-sec {
    width: 100%;
    box-sizing: border-box;
    border-radius: 13px 0;
    padding: 1rem;
}
.test-list {
    width: 100%;
    height: 100px;
    border-radius: 5px;
    background: #ffffff;
}
.test-type {
    display: flex;
    box-sizing: border-box;
    li {
        margin-top: 30px;
        margin-left: 20px;
        list-style: none;
    }
    .el-select {
        margin-top: 20px;
    }
}
.test-type .el-button {
    width: 100px;
    height: 30px;
    margin-top: 25px;
    margin-left: 20px;
}
.test-typ {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    background: #ffffff;
    margin-top: 20px;
}
.test-typ .head {
    display: flex;
    justify-content: space-between;
    li {
        margin-top: 20px;
        padding: 0 5px;
        list-style: none;
    }
    .conent {
        margin-top: 20px;
    }
}
</style>
<template>
    <div class="createTest-box">
        <el-container>
            <!-- 公共头部 -->
            <el-header>
                <PublicHeader :name="name" />
            </el-header>
            <el-main>
                <div class="ant-layout-content">
                    <!-- 添加按钮 -->
                    <el-button plain>添加新题</el-button>
                    <div class="style_exam__2rgl0">
                        <h2>{{title}}</h2>
                        <p>考试时间:1小时30分钟  监考人:{{user_name}} 开始时间:{{start_time}} 阅卷人:{{user_name}}</p>
                        <span class="style_juan__nAupa"></span>
                        <TestList></TestList>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
//引入头部组件
import PublicHeader from "@/components/publicHeader/index"
//引入试题列表
import TestList from "@/components/testList/index"
import {mapState} from "vuex"
export default {
    props:{

    },
    components:{
        PublicHeader,
        TestList
    },
    data(){
        return {
            name:"创建考试",
            title:localStorage.getItem("addTest").title||[],
            start_time:localStorage.getItem("addTest").start_time||[],
            user_name:localStorage.getItem("addTest").questions[0].user_name||[]
        }
    },
    computed:{
        ...mapState({
            createTestList:state=>state.createTest.createTestList
        })
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped >
    .createTest-box{
        width:100%;
        background:#f0f2f5;
    }
    .ant-layout-content{
        background: rgb(255, 255, 255);
        padding: 24px;
        margin: 0px 0px 20px;
        border-radius: 10px;
    }
    .style_exam__2rgl0{
        min-height: 980px;
        margin: auto;
        padding: 40px;
        text-align: center;
        position: relative;
    }
    h2{
        margin-top: 0;
        margin-bottom: 10.5px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size:21px;
    }
    p{
        margin-top:0;
        margin-bottom:14px;
        font-size:14px;
    }
    .style_juan__nAupa{
        position: absolute;
        border: 0;
        right: 0;
        bottom: 0;
        width: 84px;
        height: 72px;
    }
</style>
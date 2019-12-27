<template>
    <div class="addtest-box">
        <el-container>
            <!-- 公共头部 -->
            <el-header>
                <PublicHeader :name="name" />
            </el-header>
            <el-main>
                <div class="ant-layout-content">
                    <!-- 试卷名称 -->
                    <el-form  label-width="120px" class="demo-dynamic">
                        <el-form-item
                            prop="title"
                            label="试卷名称"
                            :rules="[
                            { required: true, message: '请输入试卷名称', trigger: 'blur' },
                            {type:''}
                            ]"
                        >
                            <el-input v-model="title"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="ant-row">
                        <!-- 考试类型 -->
                        <el-form  label-width="120px" class="demo-dynamic">
                            <el-form-item
                                prop="exam_id"
                                label="选择试卷类型"
                                :rules="[
                                { required: true, message: '请输入考试类型', trigger: 'blur' },
                                {type:''}
                                ]"
                            >
                                <el-select class="ant-select-selection-single" v-model="exam_id" placeholder="">
                                    <!-- 试卷类型组件的展示 -->
                                    <ExamTypes></ExamTypes>
                                </el-select> 
                            </el-form-item>
                        </el-form>

                        <el-form  label-width="120px" class="demo-dynamic">
                            <el-form-item
                                prop="subject_id"
                                label="选择课程"
                                :rules="[
                                { required: true, message: '请输入课程', trigger: 'blur' },
                                {type:''}
                                ]"
                            >
                                <el-select class="ant-select-selection-single" v-model="subject_id"  placeholder="">
                                    <!-- 课程组件的展示 -->
                                    <ExamCourse></ExamCourse>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <!-- 题量 -->
                        <el-form  label-width="120px" class="demo-dynamic">
                        <el-form-item
                            prop="number"
                            label="设置题量"
                            :rules="[
                            { required: true, message: '请输入数量', trigger: 'blur' },
                            {type:'number'}
                            ]"
                        >
                            <el-input-number v-model="number" :min="3" :max="10" controls-position="right"></el-input-number>
                        </el-form-item>
                        </el-form>
                        <!-- 时间 -->

                        <el-form  label-width="120px" class="demo-dynamic">
                            <el-form-item
                                prop="start_time"
                                label="考试时间"
                                :rules="[
                                { required: true, message: '请输入开始时间', trigger: 'blur' },
                                {type:''}
                                ]"
                            >
                                <el-date-picker v-model="start_time"
                                    value-format="timestamp"
                                    placeholder="开始时间">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item
                                prop="end_time"
                                :rules="[
                                { required: true, message: '请输入结束时间', trigger: 'blur' },
                                {type:''}
                                ]"
                            >
                                <el-date-picker v-model="end_time"
                                    value-format="timestamp"
                                    placeholder="结束时间">
                                </el-date-picker>
                            </el-form-item>
                        </el-form>
                         
                        <!-- 创建试卷按钮 -->
                        <div class="ant-form-item">
                            <div class="ant-form-item-control">
                                <button class="ant-btn-primary" @click="createExams">创建试卷</button>
                            </div>
                        </div>
                        
                    </div>                  
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
//引入头部组件
import PublicHeader from "@/components/publicHeader/index"
import {mapActions} from "vuex"
//引入考试类型组件
import ExamTypes from "@/components/examTypes/index"
//引入课程组件
import ExamCourse from "@/components/examCourse/index"
export default {
    components:{
         PublicHeader,
         ExamTypes,
         ExamCourse
    },
    data(){
        return {
            name:"添加考试",
            pickerOptions1: {
                disabledDate(time) {
                    console.log(time)
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
        },
        subject_id:"",//学科
        exam_id:"",//试卷类型
        title:"",//试卷标题
        start_time:"",//开始时间
        end_time:"",//结束时间
        number:3,//题量 默认为3
        }
    },
    methods:{
        ...mapActions({
            CreateExam:"examination/CreateExam",
        }),

        //点击创建试卷按钮
        createExams(){
            // window.open('','_self').close()
            let data={
                subject_id:this.subject_id,//学科
                exam_id:this.exam_id,//试卷类型id
                title:this.title,//试卷标题
                start_time:this.start_time,//开始时间
                end_time:this.end_time,//结束时间
                number:this.number  //题量
            }           
            this.CreateExam(data)

            //都输入，跳转到创建考试页面
            if(data.title&&data.exam_id&&data.subject_id&&data.number&&data.start_time&&data.end_time){
                this.isTitle=false
                this.isExamId=false
                this.isSubjectId=false
                this.isStartTime=false
                this.isEndTime=false
                this.isNumber=false
                this.$router.push("createTest")
            }
        },
    },
}
</script>
<style scoped>
.addtest-box{
    background:#f0f2f5;
    width:100%;
}
.ant-layout-content{
    background: #fff;
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
    box-sizing: border-box;
}
.ant-row{
    width:40%;
    margin:0 -3px;
    position: relative;
    height:auto;
    zoom: 1;
    display: block;
}
.ant-form-item{
    margin:0 0 24px;
    height:78.4px;
}
.ant-form-item span{
    color:red;
}
.ant-form-item-label{
    height:39.2px;
}
.ant-form-item-required{
    color:rgba(0,0,0,0.85);
    font-size:14px;
}
.ant-form-item-required:before {
    display: inline-block;
    margin-right: 4px;
    content: '*';
    font-family: SimSun;
    line-height: 1;
    font-size: 14px;
    color: #f5222d;
}
.ant-form-item-label label:after {
    content: ':';
    margin: 0 8px 0 2px;
    position: relative;
    top: -0.5px;
}
.ant-input{
    width:100%;
    height:32px;
    background:#fff;
    padding:4px 11px;
    border:1px solid #ccc;
}
.ant-form-item-control{
    width:100%;
    height:39.2px;
    display: flex;
    align-items: center;
}
.ant-form-item-control span{
    width:24px;
    height:100%;
    color:rgba(0,0,0,.65);
    font-size:14px;
    text-align: center;
    line-height:39.2px;
}
.ant-select-selection-single{
    width:35%;
    height:32px;
    background:#fff;
    border-radius: 4px;
    border:1px solid #d9d9d9;
    border-top:1.02px solide #d9d9d9;
}
.ant-select-selection-single option{
    width:100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.ant-select-selection_rendered{
    height:29.6px;
    margin:0 11px;
    position: relative;
}

.ant-input-number-input{
    height:38px;
    background:#fff;
}
.ant-btn-primary{
    height:32px;
    padding: 0 40px;
    border-radius: 4px;
    border: 0;
    font-size: 14px;
    color: #fff;
    background: linear-gradient(-90deg,#4e75ff,#0139fd);
}
</style>
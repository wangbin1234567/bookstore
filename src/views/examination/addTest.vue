<template>
    <div class="addtest-box">
        <el-container>
            <!-- 公共头部 -->
            <el-header>
                <PublicHeader :name="name" />
            </el-header>
            <el-main>
                <div class="ant-layout-content">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-dynamic">

                        <!-- 试卷名称 -->
                        <el-form-item label="试卷名称:" prop="title">
                            <el-input v-model="ruleForm.title"></el-input>
                        </el-form-item>

                        <!-- 考试类型 -->
                        <el-form-item label="选择试卷类型:" prop="exam_id">
                            <el-select v-model="ruleForm.exam_id" >
                                <!-- 试卷类型组件的展示 -->
                                <ExamTypes></ExamTypes>
                            </el-select>
                        </el-form-item>

                        <!-- 选择课程 -->
                        <el-form-item label="选择课程:" prop="subject_id">
                            <el-select v-model="ruleForm.subject_id">
                                <!-- 课程组件的展示 -->
                                <ExamCourse></ExamCourse>
                            </el-select>
                        </el-form-item>

                        <!-- 题量 -->
                        <el-form-item label="题量:" prop="number">
                            <el-input-number v-model="ruleForm.number" :min="3" :max="10" controls-position="right"></el-input-number>
                        </el-form-item>

                        <!-- 时间 -->
                        <el-form-item label="考试时间:">
                            <el-col :span="11">
                                <el-form-item prop="start_time">
                                    <el-date-picker type="date" value-format="timestamp" placeholder="开始时间" v-model="ruleForm.start_time"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-form-item prop="end_time">
                                     <el-date-picker type="date" value-format="timestamp" placeholder="结束时间" v-model="ruleForm.end_time"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>

                        <!-- 创建试卷按钮 -->
                        <el-form-item>
                            <el-button type="primary" @click="createExams('ruleForm')">创建试卷</el-button>
                        </el-form-item>
                    </el-form>
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
        ruleForm:{
            subject_id:"",//学科
            exam_id:"",//试卷类型
            title:"",//试卷标题
            start_time:"",//开始时间
            end_time:"",//结束时间
            number:3,//题量 默认为3
            },
            //提示信息
            rules:{
                title:[
                    {required:true,message:'请输入试卷名称',trigger:'blur'},
                ],
                exam_id:[
                    {required:true,message:'请选择试卷类型',trigger:'change'},
                ],
                subject_id:[
                    {required:true,message:'请选择课程',trigger:'change'},
                ],
                number:[
                    {type:'number',required:true,message:'请选择题量',trigger:'change'}
                ],
                start_time:[
                    {type:'date',required:true,message:"请选择开始时间",trigger:'change'}
                ],
               end_time:[
                    {type:'date',required:true,message:"请选择结束时间",trigger:'change'}
                ]
            }
        }
    },
    methods:{
        ...mapActions({
            CreateExam:"examination/CreateExam",
        }),

        //点击创建试卷按钮  
        createExams(formName){
            let data={
                subject_id:this.ruleForm.subject_id,//学科
                exam_id:this.ruleForm.exam_id,//试卷类型id
                title:this.ruleForm.title,//试卷标题
                start_time:this.ruleForm.start_time,//开始时间
                end_time:this.ruleForm.end_time,//结束时间
                number:this.ruleForm.number  //题量
            }           
            this.CreateExam(data)
            //都输入，跳转到创建考试页面
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    this.$router.push("createTest")
                }
            })
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

</style>
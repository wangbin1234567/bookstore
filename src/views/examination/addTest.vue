<template>
    <div class="addtest-box">
        <el-container>
            <!-- 公共头部 -->
            <el-header>
                <PublicHeader :name="name" />
            </el-header>
            <el-main>
                <div class="ant-layout-content">
                    <div class="ant-row">
                        <!-- 试卷名称 -->
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">试卷名称:</label>
                            </div>
                            <input type="text" id="title" class="ant-input" v-model="questions">                            
                        </div>
                        <!-- 试卷类型 -->
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">选择试卷类型:</label>
                            </div>

                            <!-- 类型选项 -->
                            <div class="ant-form-item-control">
                                <el-select class="ant-select-selection-single" v-model="exam_exam_id" placeholder="">
                                    <el-option 
                                        v-for="item in types"
                                        :key="item.exam_name"
                                        :label="item.exam_name"
                                        :value="item.exam_name"
                                    ></el-option>
                                </el-select>
                            </div>

                        </div>

                        <!-- 课程 -->
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">选择课程:</label>
                            </div>
                            <!-- 课程选项 -->
                            <div class="ant-form-item-control">
                                <el-select class="ant-select-selection-single"  placeholder="">
                                    <el-option 
                                        v-for="item in course"
                                        :key="item.subject_text"
                                        :label="item.subject_text"
                                        :value="item.subject_text"></el-option>
                                </el-select>
                            </div>

                        </div>

                        <!-- 题量 -->
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">设置题量:</label>
                            </div>
                            <!-- 题目数量 -->
                            <div class="ant-form-item-control">
                                 <el-input-number class="ant-input-number-input"  controls-position="right"  :min="1" :max="10"></el-input-number>
                            </div>

                        </div>

                        <!-- 考试时间 -->
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">考试时间:</label>
                            </div>
                            <!-- 开始时间 -->
                            <div class="ant-form-item-control">
                                <el-date-picker v-model="start_time"
                                    placeholder="开始时间">
                                </el-date-picker>

                                <!-- 分隔符 -->
                                <span>-</span>

                                <!-- 结束时间 -->
                                 <el-date-picker v-model="end_time"
                                    placeholder="结束时间">
                                </el-date-picker>

                            </div>

                        </div>

                        <!-- 创建试卷按钮 -->
                        <div class="ant-form-item">
                            <div class="ant-form-item-control">
                                <button class="ant-btn-primary" @click="createExam()">创建试卷</button>
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
import {mapActions,mapState,mapMutations} from "vuex"
// import examination from '../../store/modules/examination';
export default {
    components:{
         PublicHeader
    },
    computed:{
         ...mapState({
             types:state=>state.examType.types,
             course:state=>state.examSubject.course,
            //  subject_id:state=>state.examination.subject_id,
            //  exam_exam_id:state=>state.examination.exam_exam_id,
            //  title:state=>state.examination.title,
            //  number:state=>state.examination.number,
            //  start_time:state=>state.examination.start_time,
            //  end_time:state=>state.examination.end_time
         })
    },
    data(){
        return {
            name:"添加考试",
            pickerOptions1: {
                disabledDate(time) {
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
        // questions_type_id:"",
        // questions_stem:"",
        // subject_id:"",//课程的id
        // exam_id:"",//类型id
        // user_id:"",//批卷人id
        // questions_answer:"",
        // title:"",//课程
        exam_exam_id:"",//试卷的类型
        questions:"",//试题名称
        start_time:"",//开始时间
        end_time:"",//结束时间
        }
    },
    methods:{
        ...mapActions({
            getExam:"examination/getExam",
            getExamType:"examType/getExamType",
            getSubject:"examSubject/getSubject"
        }),
        ...mapMutations({
            // setSubject:"examination/setSubject",
            // setExam:"examination/setExam",
            // setTitle:"examination/setTitle",
            // setNumber:"examination/setNumber",
            // setStartTime:"examination/setStartTime",
            // setEndTime:"examination/setEndTime"
        }),
        //点击创建试卷按钮
        createExam(){
            // this.setNumber(this.number)
            // this.setSubject(this.subject_id)
            // this.setExam(this.exam_id)
            // this.setTitle(this.title)
            // this.setStartTime(this.start_time)
            // this.setEndTime(this.end_time)
            let data={
                // questions_type_id:this. questions_type_id,
                // questions_stem:this.questions_stem,
                // subject_id:this.subject_id,
                // exam_id:this.exam_id,
                // user_id:this.user_id,
                // questions_answer:this.questions_answer,
                // title:this.title,
                exam_exam_id:this.exam_exam_id,
                questions:this.questions,
                start_time:this.start_time,
                end_time:this.end_time
            }
            this.getExam(data)
        },
    },
    created(){
        this.getExamType()
        this.getSubject()
    }
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
.ant-form-item-label{
    height:39.2px;
}
.ant-form-item-required{
    color:rgba(0,0,0,0.85);
    font-size:14px;
}
.ant-input{
    width:100%;
    height:32px;
    background:#fff;
    padding:4px 11px;
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
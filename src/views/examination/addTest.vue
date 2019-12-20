<template>
    <div class="addtest-box">
        <el-container>
            <el-header>
                <PublicHeader :name="name" />
            </el-header>
            <el-main>
                <div class="ant-layout-content">
                    <div class="ant-row">
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">试卷名称:</label>
                            </div>
                            <input type="text" id="title" class="ant-input" v-model="subject_id">                            
                        </div>
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">选择试卷类型:</label>
                            </div>
                            <div class="ant-form-item-control">
                                <el-select class="ant-select-selection-single" v-model="value" placeholder="">
                                    <el-option 
                                        v-for="item in types"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">选择课程:</label>
                            </div>
                            <div class="ant-form-item-control">
                                <el-select class="ant-select-selection-single" v-model="typevalue" placeholder="">
                                    <el-option 
                                        v-for="item in course"
                                        :key="item.typevalue"
                                        :label="item.label"
                                        :value="item.typevalue"></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">设置题量:</label>
                            </div>
                            <div class="ant-form-item-control">
                                 <el-input-number class="ant-input-number-input" v-model="number" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                            </div>
                        </div>
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title" class="ant-form-item-required">考试时间:</label>
                            </div>
                            <div class="ant-form-item-control">
                                <el-date-picker v-model="start_time"
                                    placeholder="开始时间">
                                </el-date-picker>
                                <span>-</span>
                                 <el-date-picker v-model="end_time"
                                    placeholder="结束时间">
                                </el-date-picker>
                            </div>
                        </div>
                        <div class="ant-form-item-control">
                            <button class="ant-btn-primary" @click="createExam(subject_id,number,start_time,end_time)">创建试卷</button>
                        </div>
                    </div>                  
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import PublicHeader from "@/components/publicHeader/index"
import {mapActions,mapState} from "vuex"
import examination from '../../store/modules/examination';
export default {
    components:{
         PublicHeader
    },
    computed:{
         ...mapState({
             types:state=>state.examination.types,
             course:state=>state.examination.course
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
        subject_id:"",
        exam_id:"",
        title:"",
        number:4,
        start_time:"",
        end_time:"",
        value:"",
        typevalue:""
        }
    },
    methods:{
        ...mapActions({
            getExam:"examination/getExam"
        }),
        createExam(subject_id,number,start_time,end_time){
            window.console.log(subject_id)
            this.getExam(subject_id,number,start_time,end_time)
        },
        handleChange(value) {
            console.log(value);
        }
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
.ant-form-item-control .el-input__inner{
    display: inline-block;
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
    width:30%;
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
    width:22%;
    height:30px;
    background:#fff;
    padding:0 11px;
}
.ant-btn-primary{
    height:32px;
    padding: 0 40px!important;
    border-radius: 4px!important;
    border: 0!important;
    font-size: 14px!important;
    color: #fff!important;
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
}
</style>
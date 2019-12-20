<template>
    <div class="examList-box">
        <el-container>
            <el-header>
                <PublicHeader :name="name" />
            </el-header>
            <el-main>
                <div class="ant-layout-content">
                    <div class="ant-row">
                        <!-- 试卷类型 -->
                        <div class="ant-form-item">
                            <div class="ant-form-item-label">
                                <label for="title">考试类型:</label>
                            </div>

                            <!-- 类型选项 -->
                            <div class="ant-form-item-control">
                                <el-select class="ant-select-selection-single" v-model="exam_id" placeholder="">
                                    <el-option 
                                        v-for="item in types"
                                        :key="item.exam_name"
                                        :label="item.id"
                                        :value="item.exam_name"
                                    ></el-option>
                                </el-select>
                            </div>

                        </div>
                        <!-- 课程选择 -->
                        <div class="ant-form-item">
                             <div class="ant-form-item-label">
                                <label for="title" >课程:</label>
                            </div>
                            <!-- 课程选项 -->
                            <div class="ant-form-item-control">
                                <el-select class="ant-select-selection-single" v-model="title" placeholder="">
                                    <el-option 
                                        v-for="item in course"
                                        :key="item.subject_text"
                                        :label="item.subject_id"
                                        :value="item.subject_text"></el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import PublicHeader from "@/components/publicHeader/index"
import {mapActions,mapState,mapMutations} from "vuex"
export default {
    props:{

    },
    components:{
         PublicHeader
    },
    data(){
        return {
             name:"试卷列表",
             title:""
        }
    },
    computed:{
        ...mapState({
            types:state=>state.examType.types,
             course:state=>state.examSubject.course,
        }),
        ...mapActions({
            getExamType:"examType/getExamType",
            getSubject:"examSubject/getSubject"
        }),
    },
    created(){
        this.getExamType()
        this.getSubject()
    }
}
</script>
<style scoped>
    .examList-box{
        background:#f0f2f5;
        width:100%;
    }
    .ant-layout-content{
        width:100%;
        height:121.2px;
        background:#fff;
        margin:0 0 20px;
        padding:24px;
        display: flex;
    }
    .ant-row{
        height:73.2px;
        width:100%;
        display: flex;
    }
    .ant-form-item{
        margin:0 0 10px;
        height:63.2px;
        width:33.33%;
        display: flex;
    }
    .ant-form-item-label{
        height:39.2px;
    }
    .ant-form-item-label label{
        height:18.4px;
        color:rgba(0,0,0,.85);
        font-size:14px;
    }
    .ant-form-item-control{
        width:100%;
        height:39.2px;
        display: flex;
        align-items: center;
    }
    .ant-select-selection-single{
        width:35%;
        height:32px;
        background:#fff;
        border-radius: 4px;
        border:1px solid #d9d9d9;
        border-top:1.02px solide #d9d9d9;
    }
</style>
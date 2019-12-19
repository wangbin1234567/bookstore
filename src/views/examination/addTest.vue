<template>
    <div class="addtest-box">
        <el-container>
            <el-header>
                <PublicHeader :name="name" />
            </el-header>
            <el-main>
                <div class="ant-layout-content">
                    <div class="ant-form">
                        <label for="title" class="ant-form-item-required" title="试卷名称">试卷名称:</label>
                    </div>
                    <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                            <input type="text" id="title" class="ant-input">
                        </span>
                    </div>
                    <div class="ant-form">
                        <label for="title" class="ant-form-item-required" title="试卷名称">选择考试类型:</label>
                    </div>
                     <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                            <input type="text" id="title" class="ant-input">
                        </span>
                    </div>
                    <!-- <div class="ant-select">
                        <div class="ant-select-selection">
                            <input type="text">
                            <div class="ant-select-selection__rendered"></div>
                            <span class="ant-select-arrow">
                                <i aria-label="图标: down" class="ant-select-arrow-icon">
                                    <svg></svg>
                                </i>
                            </span>
                        </div>
                    </div> -->
                    <div class="ant-form">
                        <label for="title" class="ant-form-item-required" title="试卷名称">选择课程:</label>
                    </div>
                     <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                            <input type="text" id="title" class="ant-input">
                        </span>
                    </div>
                    <!-- <div class="ant-select">
                        <div class="ant-select-selection">
                            <div class="ant-select-selection__rendered"></div>
                            <span class="ant-select-arrow">
                                <i aria-label="图标: down" class="ant-select-arrow-icon">
                                    <svg></svg>
                                </i>
                            </span>
                        </div>
                    </div> -->
                    <div class="ant-form">
                        <label for="title" class="ant-form-item-required" title="试卷名称">设置题量:</label>
                    </div>
                     <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                            <input type="text" id="title" class="ant-input">
                        </span>
                    </div>
                    <div class="ant-form">
                        <label for="title" class="ant-form-item-required" title="试卷名称">考试时间:</label>
                        <!-- <el-date-picker
                            v-model="value6"
                            type="daterange"
                            range-separator="-"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker> -->
                    </div>
                     <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                            <input type="text" id="title" class="ant-input">
                        </span>
                    </div>
                     <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                           <button type="submit" class="ant-btn-primary"><span>创建试卷</span></button>
                        </span>
                    </div>
                </div>
            </el-main>

        </el-container>
    </div>
</template>
<script>
import PublicHeader from "@/components/publicHeader/index"
export default {
    props:{

    },
    components:{
         PublicHeader
    },
    data(){
        return {
             name:"添加考试",
             input2: '',
             input21: '',
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped>
.addtest-box{
    background:#f0f2f5;
    width:100%;
    display: flex;
    flex-direction: column;
}

.ant-layout-content{
    background: rgba(255, 255, 255);
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
}
.ant-from{
    flex:1;
    background:#fff;
    margin:0 0 20px;
    padding:24px;
}
.ant-form-item-control{
    line-height:39.9999px;
}
.ant-form-item-children{
    font-size: 14px;
    font-variant: tabular-nums;
    color: rgba(0, 0, 0, 0.65);
    list-style:none;
}
.ant-btn-primary{
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    height:30px;
    padding: 0 40px;
    border-radius: 4px;
    border: 0;
    font-size: 14px;
    color: #fff;
    background: linear-gradient(-90deg,#4e75ff,#0139fd);
}
.ant-select{
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    position: relative;
    outline: 0;
}
.ant-select-selection{
    outline: none;
    user-select: none;
    box-sizing: border-box;
    display: block;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    border-top-width: 1.02px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.35)
}
.ant-select-selection__rendered{
    display: block;
    margin-left: 11px;
    margin-right: 11px;
    position: relative;
    line-height: 30px;
}
.ant-select-arrow{
    display: inline-block;
    font-style: normal;
    vertical-align: -0.125em;
    text-align: center;
    text-transform: none;
    line-height: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    top: 50%;
    right: 11px;
    line-height: 1;
    margin-top: -6px;
    transform-origin: 50% 50%;
    color: rgba(0, 0, 0, 0.25);
    font-size: 12px;
}
.ant-select-arrow .ant-select-arrow-icon{
    display: block;
}
.ant-select-arrow svg{
    display: inline-block
}
.ant-input{
    font-variant: tabular-nums;
    box-sizing: border-box;
    margin: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    /* width: 100%; */
    height: 32px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s
}
</style>
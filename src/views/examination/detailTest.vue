<template>
    <!-- 详情页面展示 -->
    <div class="detailTest-box">
        <el-header>
            <PublicHeader :name="name" />
        </el-header>
        <el-main>
            <div class="style_detailContent__1Cb53">
                <div class="ant-layout-content">
                    <div class="style_exam__2fYLs"></div>
                </div>
                <div class="ant-layout-content">
                    <div class="style_exam__2fYLs"></div>
                </div>
            </div>

        </el-main>
    </div>
</template>
<script>
//引入头部组件
import PublicHeader from "@/components/publicHeader/index"
import {mapState,mapActions} from "vuex"
export default {
    props:{

    },
    components:{
        PublicHeader
    },
    data(){
        return {
            name:"试卷详情"
        }
    },
    computed:{
      ...mapState({
            detailList:state=>State.examDetail.detailList,
      })
    },
    methods:{
       ...mapActions({
            getW5tcy:"examDetail/getW5tcy"
        }),
    },
    created(){
        this.getW5tcy()
    },
    mounted(){

    }
}
</script>
<style scoped >
.detailTest-box{
    width:100%;
    background: #f0f2f5;
    height:auto;
    overflow-y: scroll;
}
.style_detailContent__1Cb53{
    display: flex;
}
.ant-layout-content{
    flex: auto;
    min-height: 0;
    margin:0 0 20px;
    padding:24px;
    background:#fff;
}
.style_exam__2fYLs{
    min-height: 980px;
    margin: auto;
    padding: 40px;
    text-align: center;
    background:#fff;
}
</style>
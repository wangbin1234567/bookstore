<template>
 <div class="ant-layout">
    <h2>试题分类</h2>
    <div class="ant-layout-content">
      <div class="style_container__2hI6B">
           <el-button type="text" @click="open3"><i class="icon ion-plus-round" ></i>添加类型</el-button>
      </div>
    <div class="ant-color">
       <el-table
      :data="testListData"
      style="width: 100%;background:#333;">
      <el-table-column
        prop="questions_type_id"
        label="类型ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="questions_type_text"
        label="类型名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
    </div>
      </div>
</div>
</template>

<script>
import { mapActions,mapState } from "vuex"
export default {
  
  computed:{
    ...mapState({

    }),
    testListData(){
      return this.$store.getters.testList
    }
  },
  methods:{
    ...mapActions({
      testManagement:'test/testManagement'
    }),
    open3() {
        this.$prompt('请输入类型名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder:"请输入类型"
        }).then(({value})=>{
          this.valueConent=value
          console.log(value)
        })
      }
  },
  mounted(){
   this.testManagement()
    // this.testManagement()
  },
  data(){
    return {
      valueConent:''
    }
  }
}
</script>

<style lang="scss" scoped>
.ant-layout{
    width: 100%;
    height: 100%;
    
    padding: 0 24px 24px;
    h2{
      padding: 20px 0;
      font-weight: 400;
      margin-top: 10px;
    }
  }
  .ant-layout-content{
     flex: auto;
     background: rgb(255, 255, 255);
     padding: 24px;
      margin: 0px 0px 20px;
      border-radius: 10px;
      min-height: 0;
  }
  .style_container__2hI6B{
    // border-radius: 4px;
    .el-button{
      height: 40px;
      padding: 0 40px;
      border-radius: 4px!important;
      border: 0!important;
      font-size: 14px;
      color: #fff;
      background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
      i{
        margin-right: 8px;
        display: inline-block;
      }
    }
  }
  .ant-color{
    background: #ccc!important;
  }
 
</style>
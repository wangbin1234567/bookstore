<template>
  <div class="ant-layout">
    <h2>添加试题</h2>
    <div class="ant-layout-content">
        <div>
            <form action="" class="ant-form ant-form-vertical">
              <h3>题目信息</h3>
              <div class="">
                题干
              </div>
              <div style="height:40px;marginTop:10px;">
                 <el-input v-model="input" placeholder="请输入目标标题,不超过20字" @change="change({
                   data:e.target.value
                 })"></el-input>
              </div>
              <div class="ant-row ant-form-item">
                  <div class="for-container">
                      <div class="for-controlbar">
                          <ul>
                            <li title="上一步 (ctrl+z)">
                              <i class="foricon for-undo"></i>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      input:''
    }
  }
}
</script>

<style lang="scss" scoped>
  .ant-layout{
    width: 100%;
    // background: #fff;
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
  .el-input:hover{
    border: 1px solid #295eff;
    border-radius: 5px;
  }
  .ant-form-item{
    padding-bottom: 8px;
  }
  .for-container{
    width: 100%;
    height: 600px;
    background: red;
  }
  .for-controlbar{
    width: 100%;
    height: 45px;
    background: pink;
  }
</style>

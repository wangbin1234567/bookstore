<template>
  <div id="app">
    <header>
        <div class="header-img">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="">
        </div>
        <div class="header-user">
          <el-dropdown>
            <div class="el-dropdown-link">
              <span class="ant-avatar">
              </span>
              <span>
                chenmanjie
              </span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,key) in mouseoverList" :key="key"><a :href="item.path" target="_Blank">{{item.name}}</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
    </header>
         <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      mouseoverShow:false,
      mouseoverList:[
        {
          name:"个人中心",
          path:"http://uland.taobao.com/sem/tbsearch"
        },{
          name:"我的班级",
          path:"http://uland.taobao.com/sem/tbsearch"
        },{
          name:"设置",
          path:"http://uland.taobao.com/sem/tbsearch"
        },{
          name:"退出登录",
          path:"http://localhost:9527"
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
header{
  position: relative;
  top: 0;
  padding: 0 50px;
  height: 64px;
  line-height: 64px;
}
.el-dropdown{
  position: relative;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background: #ffffff;
  color:#000;
  height: 64px;
  border: none;
}
.el-dropdown-link:hover{
  background: #eee;
}
.el-dropdown-link{
  border: none;
  background: #fff;
  color: #000;
  height: 100%;
  width: 100%;
  .ant-avatar{
      margin-right: 10px;
      padding: 0;
      list-style: none;
      display: inline-block;
      text-align: center;
      background: #ccc;
      color: #fff;
      white-space: nowrap;
      position: relative;
      overflow: hidden;
      vertical-align: middle;
      width: 32px;
      height: 32px;
      line-height: 32px;
      border-radius: 50%;
      font-size: 14px;
      font-variant: tabular-nums;
    }
}
 .el-dropdown-menu{
      width: 117px;
      background: #fff;
      left: -10px
    }
.header-img{
    width: 120px;
    margin: 19px 28px 14px 0;
    float: left;
    line-height: 31px;
    text-align: center;
    color: #fff;
    font-weight: 700;
    font-family: "\5B8B\4F53";
    img{
      width: 100%;
      height: 100%;
    }
}
</style>

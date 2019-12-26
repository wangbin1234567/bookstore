<template>
  <div class="wrap-l">
    <h2 style="padding: 5px 20px; margin-top: 10px;">用户展示</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="用户数据">
        <h3>用户管理</h3>
        <el-table
          :data="DataList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%">
          <el-table-column
            prop="user_name"
            label="用户名"
            width="280">
          </el-table-column>
          <el-table-column
            prop="user_pwd"
            label="密码"
            width="700">
          </el-table-column>
          <el-table-column
            prop="identity_text"
            label="身份">
          </el-table-column>
        </el-table>
        <el-pagination @current-change = "current_change"
          style="float:right;"
          background
          :total="DataList.length"
          :page-size="pagesize">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="身份数据">
        <h3>身份数据</h3>
        <el-table
          :data="identityList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%;">
          <el-table-column
            prop="identity_text"
            label="身份名称"
            width="1400">
          </el-table-column>
        </el-table>
        <el-pagination @current-change = "current_change"
          style="float:right;"
          background
          :total="identityList.length"
          :page-size="pagesize">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="api接口权限">
        <h3>api接口权限</h3>
        <el-table
          :data="apIIdentity.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%">
          <el-table-column
            prop="api_authority_text"
            label="api权限名称"
            width="280">
          </el-table-column>
          <el-table-column
            prop="api_authority_url"
            label="api权限url"
            width="700">
          </el-table-column>
          <el-table-column
            prop="api_authority_method"
            label="api权限方法">
          </el-table-column>
        </el-table>
        <el-pagination @current-change = "current_change"
          style="float:right;"
          background
          :total="apIIdentity.length"
          :page-size="pagesize">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="身份和api接口权限">
        <h3>身份和api接口权限</h3>
        <el-table
          :data="APIrelation.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%">
          <el-table-column
            prop="identity_text"
            label="身份名称"
            width="280">
          </el-table-column>
          <el-table-column
            prop="api_authority_text"
            label="api权限名称"
            width="300">
          </el-table-column>
          <el-table-column
            prop="api_authority_url"
            label="api权限url"
            width="500">
          </el-table-column>
          <el-table-column
            prop="api_authority_method"
            label="api权限方法"
            width="350">
          </el-table-column>
        </el-table>
        <el-pagination @current-change = "current_change"
          style="float:right;"
          background
          :total="APIrelation.length"
          :page-size="pagesize">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="视图接口权限">
        <h3>视图接口权限</h3>
        <el-table
          :data="apiAuthority.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%">
          <el-table-column
            prop="view_authority_text"
            label="视图名称"
            width="500">
          </el-table-column>
          <el-table-column
            prop="view_id"
            label="视图id"
            width="700">
          </el-table-column>
        </el-table>
        <el-pagination @current-change = "current_change"
          style="float:right;"
          background
          :total="apiAuthority.length"
          :page-size="pagesize">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="视图和身份权限关系">
        <h3>视图和身份权限关系</h3>
        <el-table
          :data="viewAuthority.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          style="width: 100%">
          <el-table-column
            prop="identity_text"
            label="身份"
            width="300">
          </el-table-column>
          <el-table-column
            prop="view_authority_text"
            label="视图名称"
            width="500">
          </el-table-column>
          <el-table-column
            prop="view_id"
            label="视图id"
            width="600">
          </el-table-column>
        </el-table>
        <el-pagination @current-change = "current_change"
          style="float:right;"
          background
          :total="viewAuthority.length"
          :page-size="pagesize">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data(){
      return {
        pagesize:7,
        currentPage:1
      }
    },

    computed: {
      ...mapState({
        DataList: state => state.UserDisplay.DataList,
        identityList: state => state.UserDisplay.identityList,
        apIIdentity: state => state.UserDisplay.apIIdentity,
        APIrelation: state => state.UserDisplay.APIrelation,
        apiAuthority: state => state.UserDisplay.apiAuthority,
        viewAuthority: state => state.UserDisplay.viewAuthority
      })
    },
    methods:{
      ...mapActions({
        userLister: "UserDisplay/userLister",
        identity: "UserDisplay/identity",
        api_identity: "UserDisplay/api_identity",
        relation: "UserDisplay/relation",
        authority: "UserDisplay/authority",
        view_authority: "UserDisplay/view_authority"
      }),
      current_change(val){
        this.currentPage = val
      }
    },
    mounted() {
      this.userLister()
      this.identity()
      this.api_identity()
      this.relation()
      this.authority()
      this.view_authority()
    },
  }
</script>

<style lang="scss" scoped>
  
</style>
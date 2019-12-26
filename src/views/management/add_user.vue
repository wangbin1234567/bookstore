<template>
  <div class="box">
        <h2 style="padding: 5px 20px; margin-top: 10px;">添加用户</h2>
        <div class="wrap-list">
          <!-- 第一个 -->
          <div class="first">
              <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <div style="width: 100%;text-align: left;margin: 0 0 10px 0;">
                      <el-button @click="addClick(flog = false)">添加用户</el-button>
                      <el-button @click="listClick(flog = true)">更新用户</el-button>
                  </div>
                  <el-form-item v-if="flog" style="height:40px;margin-bottom:5px;" label="身份Id:" prop="identity_id">
                      <el-select v-model="ruleForm.userID" placeholder="请选择身份id" style="margin-bottom: 20px;">
                        <el-option
                          v-for="item in userListen"
                          :key="item.user_id"
                          :label="item.user_name">
                        </el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item style="height:40px;margin-bottom:5px;" label="账号:" prop="user_name">
                      <el-input  v-model="ruleForm.user_name" autocomplete="off" placeholder="请输入账号">
                      </el-input>
                  </el-form-item>
                  <el-form-item style="height:40px;margin-bottom:5px;" label="密码:" prop="user_pwd">
                      <el-input type="password" v-model="ruleForm.user_pwd" autocomplete="off" placeholder="请输入密码">
                      </el-input>
                  </el-form-item>
                  <el-form-item style="height:40px;margin-bottom:5px;" label="身份Id:" prop="identity_id">
                      <el-select v-model="ruleForm.identity_id" placeholder="请选择身份id" style="margin-bottom: 20px;">
                        <el-option
                          v-for="item in userId"
                          :key="item"
                          :label="item"
                          :value="item">
                        </el-option>
                      </el-select>
                  </el-form-item>
                <el-form-item style="height:40px;margin-bottom:5px;">
                    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
          </div>
          <!-- 第二个 -->
          <div class="secroe">
            <el-form :model="ruleForm" status-icon ref="ruleForm1" label-width="100px"
            class="demo-ruleForm1">
                <div style="width: 100%;text-align: left;margin-bottom:10px;">
                    <el-button >添加身份</el-button>
                </div>
                <el-form-item label="账号:" prop="shen">
                    <el-input type="text" v-model="ruleForm.shen" autocomplete="off" placeholder="请输入身份">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="Addshen()">确定</el-button>
                    <el-button @click="resetForm('ruleForm1')">重置</el-button>
                </el-form-item>
            </el-form>
          </div>
          <!-- 第三个 -->
          <div class="three">
            <el-form :model="ruleForm" status-icon ref="ruleForm2" label-width="100px"
            class="demo-ruleForm2">
                <div style="width: 100%;text-align: left;margin-bottom:10px;">
                    <el-button>添加api接口权限</el-button>
                </div>
                <el-form-item style="height:40px;margin-bottom:5px;" label="权限名称:" prop="permissions_name">
                    <el-input type="text" v-model="ruleForm.permissions_name" autocomplete="off" placeholder="请输入api接口权限名称"></el-input>
                </el-form-item>
                <el-form-item style="height:40px;margin-bottom:5px;" label="权限url:" prop="permissions_url">
                    <el-input type="text" v-model="ruleForm.permissions_url" autocomplete="off" placeholder="请输入api接口权限url"></el-input>
                </el-form-item>
                <el-form-item style="height:40px;margin-bottom:5px;" label="权限方法:" prop="permissions_list">
                    <el-input type="text" v-model="ruleForm.permissions_list" placeholder="请输入api接口权限方法"></el-input>
                </el-form-item>
                <el-form-item style="height:40px;margin-bottom:5px;">
                    <el-button type="primary" @click="AddPermissions()">确定</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
          </div>
          <!-- 第四个 -->
          <div class="four">
            <el-form :model="ruleForm" status-icon ref="ruleForm3" label-width="100px"
            class="demo-ruleForm3">
                <div style="width: 100%;text-align: left;margin-bottom:10px;">
                    <el-button>添加视图接口权限</el-button>
                </div>
                <el-form-item prop="AddList">
                  <el-select v-model="ruleForm.AddList" placeholder="请选择已有视图" style="margin-bottom: 20px;">
                    <el-option
                      v-for="item in AddJurisdiction"
                      :key="item.view_authority_id"
                      :label="item.view_authority_text"
                      :value="item.view_id"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="jurisdictionList()">确定</el-button>
                    <el-button @click="resetForm('ruleForm3')">重置</el-button>
                </el-form-item>
            </el-form>
          </div>
          <!-- 第五个 -->
          <div class="fix">
            <el-form :model="ruleForm" status-icon ref="ruleForm4" label-width="100px"
            class="demo-ruleForm4">
                <div style="width: 100%;text-align: left;margin-bottom:10px;">
                    <el-button>给身份设置api接口权限</el-button>
                </div>
                <el-form-item prop="api_identity_id">
                    <el-select v-model="ruleForm.api_identity_id" placeholder="请选择身份id" style="margin-bottom: 20px;">
                      <el-option
                        v-for="item in userId"
                        :key="item.user_id"
                        :label="item"
                        :value="item.identity_id">
                      </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="apiJurisdiction">
                  <el-select v-model="ruleForm.apiJurisdiction" placeholder="请选择api接口权限" style="margin-bottom: 20px;">
                    <el-option
                      v-for="item in ApiList"
                      :key="item.api_authority_id"
                      :label="item.api_authority_text"
                      :value="item.api_authority_id"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>            
                <el-form-item>
                    <el-button type="primary" @click="ApiListen()">确定</el-button>
                    <el-button @click="resetForm('ruleForm4')">重置</el-button>
                </el-form-item>
            </el-form>
          </div>
          <!-- 第六个 -->
          <div class="six">
            <el-form :model="ruleForm" status-icon ref="ruleForm5" label-width="100px"
            class="demo-ruleForm5">
                <div style="width: 100%;text-align: left;margin-bottom:10px;">
                    <el-button>给身份设置视图权限</el-button>
                </div>
                <el-form-item style="height:40px;margin-bottom:5px;" label="身份Id:" prop="Qidentity_id">
                    <el-select v-model="ruleForm.Qidentity_id" placeholder="请选择身份id" style="margin-bottom: 20px;">
                      <el-option
                        v-for="item in userId"
                        :key="item"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="apiAddList">
                  <el-select v-model="ruleForm.apiAddList" placeholder="请选择已有视图" style="margin-bottom: 20px;">
                    <el-option
                      v-for="item in AddJurisdiction"
                      :key="item.view_authority_id"
                      :label="item.view_authority_text"
                      :value="item.view_authority_id"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="AddJur()">确定</el-button>
                    <el-button @click="resetForm('ruleForm5')">重置</el-button>
                </el-form-item>
            </el-form>
          </div>
        </div>
  </div>
</template>

<script>
import { 
      register, 
      AddShen, 
      permissions, 
      jurisdictionList, 
      jurisdictionAdd,
      Identity_permissions,
      setIdentityView
    } from '@/api/index'
import { mapState, mapActions } from 'vuex'
export default {
    data() {
      return {
        ruleForm: {
          userID:"",
          user_name: '',
          user_pwd: '',
          identity_id: '',
          AddList:"",
          shen:"",
          permissions_name:"",
          permissions_url:"",
          permissions_list:"",
          apiAddList:"",
          api_identity_id:"",
          apiJurisdiction:"",
          Qidentity_id:"",
          apiAddList:""
        },
        flog:false
      };
    },
    computed: {
      ...mapState({
          AddJurisdiction: state => state.management.AddJurisdiction,
          userId: state => state.management.userId,
          userId_list: state => state.management.userId_list,
          ApiList: state => state.management.ApiList,
          userListen: state => state.management.userListen
      }),
    },
    methods: {
      ...mapActions({
          jurisdiction:'management/jurisdiction',
          userList:'management/userList',
          Apijurisdiction:"management/Apijurisdiction",
          USER_List: "management/USER_List"
      }),
      //添加用户
      submitForm() {
        let username = this.ruleForm.user_name;
        let userpwd = this.ruleForm.user_pwd;
        let identity_id = this.ruleForm.identity_id
        let data = this.userId_list.filter(item => item.identity_text == identity_id)
        let identity_id_List = data[0].identity_id
        
        // user_name: "songzhiwei", user_pwd: "Wangbin123!", identity_id: "uf81yn-hv8uvv"
        register({ user_name:username, user_pwd:userpwd,identity_id:identity_id_List}).then(res => {
          console.log(res);
        })
      },
      //添加身份
      Addshen(){
        AddShen({ identity_text: this.ruleForm.shen }).then(res =>{
          console.log(res);
        })
      },
      //添加api接口
      AddPermissions(){
        let api_authority_text = this.ruleForm.permissions_name;
        let api_authority_url = this.ruleForm.permissions_url;
        let api_authority_method = this.ruleForm.permissions_list;        
        permissions(
          { 
            api_authority_text: api_authority_text, 
            api_authority_url: api_authority_url, 
            api_authority_method: api_authority_method 
          }
        ).then(res => {
          console.log(res);
          
        })
      },
      //重置
      resetForm(formName) {   
           this.$refs[formName].resetFields();
      },
      //添加视图
      jurisdictionList(){        
        let str = this.ruleForm.AddList;
        let ItemList = this.AddJurisdiction.filter(item => item.view_id == str)
        console.log(ItemList);
        

        let view_authority_text = ItemList[0].view_authority_text;
        let view_id = ItemList[0].view_id;
        

        jurisdictionAdd({ view_authority_text: view_authority_text, view_id: view_id }).then(res => {
          console.log(res);
        })
      },
      //给身份设定api接口权限
      ApiListen(){
        let api_identity_id = this.ruleForm.api_identity_id;
        let apiJurisdiction = this.ruleForm.apiJurisdiction;
        Identity_permissions({identity_id: api_identity_id, api_authority_id: apiJurisdiction}).then(res => {
          console.log(res);
        })
      },
      AddJur(){
        let Qidentity_id = this.ruleForm.Qidentity_id
        let data = this.userId_list.filter(item => item.identity_text == Qidentity_id)
        let identity_id_Listen = data[0].identity_id
        let view_authority_id = this.ruleForm.apiAddList;
        setIdentityView({ identity_id: identity_id_Listen, view_authority_id: view_authority_id }).then(res => {
          console.log(res);
        })
      }
    },
    mounted() {
      this.jurisdiction(),
      this.userList(),
      this.Apijurisdiction(),
      this.USER_List()
    },
  }
</script>

<style lang="scss" scoped>
    .box{
        margin-left: 20px;
        height: 700px;
    }
    .wrap-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .first,.secroe,.three,.four,.fix,.six{
        width: 33%;
        border: 1px solid #3A71A8;
    }
</style>

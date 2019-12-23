<template>
  <div>
        <h2 style="padding: 5px 20px; margin-top: 10px;">添加用户</h2>
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div style="width: 100%;text-align: left;margin: 0 0 10px 0;">
                <el-button>添加用户</el-button><el-button>更新用户</el-button>
            </div>
            <!-- 第一个 -->
            <el-form-item label="账号:" prop="user_name">
                <el-input  v-model="ruleForm.user_name" autocomplete="off" placeholder="请输入账号">
                </el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="user_pwd">
                <el-input type="password" v-model="ruleForm.user_pwd" autocomplete="off" placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <el-form-item label="身份Id:" prop="identity_id">
                <el-select v-model="ruleForm.identity_id" placeholder="请选择身份id" style="margin-bottom: 20px;">
                  <el-option
                    v-for="item in userId"
                    :key="item.user_id"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 第二个 -->
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
        <!-- 第三个 -->
        <el-form :model="ruleForm" status-icon ref="ruleForm2" label-width="100px"
        class="demo-ruleForm2">
            <div style="width: 100%;text-align: left;margin-bottom:10px;">
                <el-button>添加api接口权限</el-button>
            </div>
            <el-form-item label="权限名称:" prop="permissions_name">
                <el-input type="text" v-model="ruleForm.permissions_name" autocomplete="off" placeholder="请输入api接口权限名称"></el-input>
            </el-form-item>
            <el-form-item label="权限url:" prop="permissions_url">
                <el-input type="text" v-model="ruleForm.permissions_url" autocomplete="off" placeholder="请输入api接口权限url"></el-input>
            </el-form-item>
            <el-form-item label="权限方法:" prop="permissions_list">
                <el-input type="text" v-model="ruleForm.permissions_list" placeholder="请输入api接口权限方法"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="AddPermissions()">确定</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 第四个 -->
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
                  :value="item.view_authority_id"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="jurisdictionList()">确定</el-button>
                <el-button @click="resetForm('ruleForm3')">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 第五个 -->
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
        <!-- 第六个 -->
        <el-form :model="ruleForm" status-icon ref="ruleForm5" label-width="100px"
        class="demo-ruleForm5">
            <div style="width: 100%;text-align: left;margin-bottom:10px;">
                <el-button>给身份设置视图权限</el-button>
            </div>
            <el-form-item prop="Qidentity_id">
                <el-select v-model="ruleForm.Qidentity_id" placeholder="请选择身份id" style="margin-bottom: 20px;">
                  <el-option
                    v-for="item in userId"
                    :key="item.user_id"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="apiAddList">
              <el-select v-model="ruleForm.apiAddList" placeholder="请选择已有视图" style="margin-bottom: 20px;">
                <el-option
                  v-for="item in AddJurisdiction"
                  :key="item.view_authority_id"
                  :label="item.view_authority_text"
                  :value="item.view_authority_text"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">确定</el-button>
                <el-button @click="resetForm('ruleForm5')">重置</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
import { 
      register, 
      AddShen, 
      permissions, 
      jurisdictionList, 
      jurisdictionAdd,
      Identity_permissions
    } from '@/api/index'
import { mapState, mapActions } from 'vuex'
export default {
    data() {
      return {
        ruleForm: {
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
      };
    },
    computed: {
      ...mapState({
          AddJurisdiction: state => state.management.AddJurisdiction,
          userId: state => state.management.userId,
          ApiList: state => state.management.ApiList
      }),
    },
    methods: {
      ...mapActions({
          jurisdiction:'management/jurisdiction',
          userList:'management/userList',
          Apijurisdiction:"management/Apijurisdiction"
      }),
      //添加用户
      submitForm() {
        let username = this.ruleForm.user_name;
        let userpwd = this.ruleForm.user_pwd;
        register({ user_name:username, user_pwd:userpwd}).then(res => {
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
        // let view_authority_text = this.AddList.view_authority_text;
        // let view_id = this.view_id;
        // console.log(jurisdictionAdd({view_authority_text,view_id}))
        
        let str = this.ruleForm.AddList;
        let ItemList = this.AddJurisdiction.filter(item => item.view_authority_id == str)
        let view_authority_text = ItemList.view_authority_text;
        let view_authority_id = ItemList.view_authority_id;
        console.log(view_authority_text,view_authority_id,"=>>>>>>>>>--------???");
        jurisdictionAdd({view_authority_text,view_authority_id}).then(res => {
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
      }
      
    },
    mounted() {
      this.jurisdiction(),
      this.userList(),
      this.Apijurisdiction()
    },
  }
</script>

<style lang="scss" scoped>
    .demo-ruleForm1[data-v-9392a76a]{
      text-align: left;
    }
    .demo-ruleForm{
        position: absolute;
        width: 400px;
        height: 300px;
        left: 50px;
        top: 50px;
        text-align: left;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .demo-ruleForm1{
        position: absolute;
        width: 400px;
        height: 300px;
        left: 450px;
        top: 50px;
        text-align: left;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .demo-ruleForm2{
        position: absolute;
        width: 400px;
        height: 300px;
        left: 850px;
        top: 50px;
        text-align: left;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .demo-ruleForm3{
        position: absolute;
        width: 400px;
        height: 280px;
        left: 50px;
        top: 350px;
        text-align: left;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .demo-ruleForm4{
        position: absolute;
        width: 400px;
        height: 280px;
        left: 450px;
        top: 350px;
        text-align: left;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .demo-ruleForm5{
        position: absolute;
        width: 400px;
        height: 280px;
        left: 850px;
        top: 350px;
        text-align: left;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
</style>

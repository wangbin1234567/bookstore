<template>
  <div>
        <h2 style="padding: 5px 20px; margin-top: 10px;">添加用户</h2>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"
        class="demo-ruleForm">
            <div style="width: 100%;text-align: left;margin: 0 0 10px 0;">
                <el-button>添加用户</el-button><el-button>更新用户</el-button>
            </div>
            <el-form-item label="账号:" prop="pass">
                <el-input type="text" v-model="ruleForm.user_name" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="checkPass">
                <el-input type="password" v-model="ruleForm.user_pwd" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="身份Id:" prop="age">
                <el-select v-model="value" placeholder="请选择身份id" style="margin-bottom: 20px;">
                  <el-option
                    v-for="item in userId"
                    :key="item.user_id"
                    :label="item.identity_text">
                  </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"
        class="demo-ruleForm1">
            <div style="width: 100%;text-align: left;margin-bottom:10px;">
                <el-button >添加身份</el-button>
            </div>
            <el-form-item label="账号:" prop="pass">
                <el-input type="text" v-model="ruleForm.user_name" autocomplete="off" placeholder="请输入身份"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"
        class="demo-ruleForm2">
            <div style="width: 100%;text-align: left;margin-bottom:10px;">
                <el-button>添加api接口权限</el-button>
            </div>
            <el-form-item label="权限名称:" prop="pass">
                <el-input type="text" v-model="ruleForm.user_name" autocomplete="off" placeholder="请输入api接口权限名称"></el-input>
            </el-form-item>
            <el-form-item label="权限url:" prop="checkPass">
                <el-input type="password" v-model="ruleForm.user_pwd" autocomplete="off" placeholder="请输入api接口权限url"></el-input>
            </el-form-item>
            <el-form-item label="权限方法:" prop="age">
                <el-input v-model.number="ruleForm.identity_id" placeholder="请输入api接口权限方法"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"
        class="demo-ruleForm3">
            <div style="width: 100%;text-align: left;margin-bottom:10px;">
                <el-button>添加视图接口权限</el-button>
            </div>
            <el-select v-model="value" placeholder="请选择已有视图" style="margin-bottom: 20px;">
              <el-option
                v-for="item in AddJurisdiction"
                :key="item.view_authority_id"
                :label="item.view_authority_text"
                :value="item.view_id">
              </el-option>
            </el-select>
            <el-form-item>
                <el-button type="primary">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"
        class="demo-ruleForm4">
            <div style="width: 100%;text-align: left;margin-bottom:10px;">
                <el-button>给身份设置api接口权限</el-button>
            </div>
            <el-select v-model="value" placeholder="请选择身份id" style="margin-bottom: 20px;">
              <el-option
                v-for="item in options"
                :key="item"
               
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择api接口权限" style="margin-bottom: 20px;">
              <el-option
                v-for="item in options"
                :key="item"
               
                :value="item.value">
              </el-option>
            </el-select>
            <el-form-item>
                <el-button type="primary">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"
        class="demo-ruleForm5">
            <div style="width: 100%;text-align: left;margin-bottom:10px;">
                <el-button>给身份设置视图权限</el-button>
            </div>
           <el-select v-model="value" placeholder="请选择身份id" style="margin-bottom: 20px;">
              <el-option
                v-for="item in options"
                :key="item"
               
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择视图权限id" style="margin-bottom: 20px;">
              <el-option
                v-for="item in options"
                :key="item"
               
                :value="item.value">
              </el-option>
            </el-select>
            <el-form-item>
                <el-button type="primary">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
import { register } from '@/api/index'
import { mapState, mapActions } from 'vuex'
export default {
    data() {
      return {
        ruleForm: {
          user_name: '',
          user_pwd: '',
          identity_id: ''
        },
        
        value: ''
      };
    },
    computed: {
      ...mapState({
          AddJurisdiction: state => state.index.AddJurisdiction,
          userId: state => state.index.userId
      }),
    },
    methods: {
      ...mapActions({
          jurisdiction:'index/jurisdiction',
          userList:'index/userList'
      }),
      submitForm() {
        // const res =  this.$api.user.register(this.ruleForm)
        let username = this.ruleForm.user_name;
        let userpwd = this.ruleForm.user_pwd;
        register({ user_name:username, user_pwd:userpwd})
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      this.jurisdiction(),
      this.userList()
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

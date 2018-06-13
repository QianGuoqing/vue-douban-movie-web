<template>
  <div class="user-center">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="login-register">
          <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="登陆" key="1">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">用户名</label>
                  <div class="col-sm-8">
                    <input v-model="loginUser.username" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label">密码</label>
                  <div class="col-sm-8">
                    <input v-model="loginUser.password" type="password" class="form-control">
                  </div>
                </div>
                <div class="button-group">
                  <button @click.prevent="doLogin" class="btn btn-primary">登陆</button>
                  <button @click.prevent="doLoginCancel" class="btn btn-danger">取消</button>
                </div>
              </form>
            </a-tab-pane>
  
            <a-tab-pane tab="注册" key="2" forceRender>
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">用户名</label>
                  <div class="col-sm-8">
                    <input v-model="registerUser.username" type="text" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label">密码</label>
                  <div class="col-sm-8">
                    <input v-model="registerUser.password" type="password" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label">确认密码</label>
                  <div class="col-sm-8">
                    <input v-model="registerUser.confirmPassword" type="password" class="form-control">
                  </div>
                </div>
                <div class="button-group">
                  <button class="btn btn-primary" @click.prevent="doRegister">注册</button>
                  <button class="btn btn-danger" @click.prevent="doRegisterCancel">取消</button>
                </div>
              </form>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'UserCenter',
    data() {
      return {
        registerUser: {
          username: '',
          password: '',
          confirmPassword: ''
        },
        loginUser: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapState(['user', 'isLogin'])
    },
    created() {
      console.log(this.user.username, this.user.password)
    },
    methods: {
      doLogin() {
        let {
          username,
          password
        } = this.loginUser
        if (username.length === 0 || password.length === 0) {
          this.$message.error('输入内容不能为空')
          return
        }
        if (username === this.user.username && password === this.user.password) {
          this.$message.success('登陆成功')
          this.$store.commit('changeLoginStatus', true)
          this.$router.push('/')
          this.loginUser.username = ''
          this.loginUser.password = ''
        } else {
          this.$message.error('用户名或者密码错误')
          this.loginUser.username = ''
          this.loginUser.password = ''
        }
      },
      doLoginCancel() {
        this.loginUser.username = ''
        this.loginUser.password = ''
        this.$message.error('取消登陆')
      },
      doRegister() {
        let {
          username,
          password,
          confirmPassword
        } = this.registerUser
        if (username.length === 0 || password.length === 0 || confirmPassword.length === 0) {
          this.$message.error('注册失败-输入内容不能为空')
          return
        }
        if (password !== confirmPassword) {
          this.$message.error('注册失败-两次密码输入不一致')
          return
        }
        if (username === this.user.username) {
          this.$message.error('注册失败-用户名已存在')
          return
        }
        this.$store.commit('registerUser', {
          username: username,
          password: password
        })
        this.$message.success('注册成功')
        this.registerUser.username = ''
        this.registerUser.password = ''
        this.registerUser.confirmPassword = ''
        console.log('after', this.user.username, this.user.password)
      },
      doRegisterCancel() {
        this.registerUser.username = ''
        this.registerUser.password = ''
        this.registerUser.confirmPassword = ''
        this.$message.error('取消注册')
      },
      callback(key) {
  
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .user-center
    .login-register
      width 40%
      text-align center
      margin 30px auto
</style>
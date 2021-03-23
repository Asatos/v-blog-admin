<template>
  <div class="login">
    <el-form class="login-form" :label-position="labelPosition" label-width="0px" :model="loginForm" size="medium">
      <h3>博客后台管理系统</h3>
      <el-form-item label="">
        <el-input
          v-model="loginForm.name"
          auto-complete="off"
          placeholder="请输入用户名"
          clearable
          prefix-icon="iconfont icon-yonghu"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="请输入密码"
          show-password
          clearable
          prefix-icon="iconfont icon-mima"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" plain>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      loginForm: {
        username: '',
        password: '',
        rememberMe: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  background: url(../assets/img/background.png) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 10px 10px 5px #888888;
    padding: 20px;
    box-sizing: border-box;
    h3 {
      height: 40px;
      text-align: center;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>

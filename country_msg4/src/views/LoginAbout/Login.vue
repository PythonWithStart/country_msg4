<template>
  <div class="login-container">
    <el-form :model="form" ref="form" label-width="100px" @submit.prevent="handleLogin">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" required></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex' // 导入 Vuex 的 mapActions
import { currentLogin } from '@/api/auth' // 更新导入路径

export default {
  name: 'Login', // 组件名称
  data () {
    return {
      form: {
        username: '', // 用户名
        password: '' // 密码
      }
    }
  },
  methods: {
    ...mapActions({ setUser: 'setUser' }), // 映射 Vuex 的 setUser 动作
    async handleLogin () {
      try {
        const response = await currentLogin({ username: this.form.username, password: this.form.password }) // 调用登录 API
        this.setUser(response.user) // 假设返回的用户信息在 response.user 中
        localStorage.setItem('token', response.token) // 存储 token
        this.$router.push('/') // 登录成功后跳转到首页
      } catch (error) {
        console.error('登录失败:', error)
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  margin:20% 20% 40% 60%;
}
</style>

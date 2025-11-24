<template>
  <div class="auth-container">
    <div class="background-overlay"></div>
    <div class="auth-content">
      <el-card class="auth-card" shadow="hover">
        <!-- 切换标签 -->
        <div class="tab-switch">
          <el-button
            :type="activeTab === 'login' ? 'primary' : 'text'"
            @click="activeTab = 'login'"
            class="tab-btn"
            size="large">
            登录
          </el-button>
          <el-button
            :type="activeTab === 'register' ? 'primary' : 'text'"
            @click="activeTab = 'register'"
            class="tab-btn"
            size="large">
            注册
          </el-button>
        </div>

        <!-- 登录表单 -->
        <el-form
          v-if="activeTab === 'login'"
          :model="loginForm"
          ref="loginForm"
          label-width="0"
          class="auth-form"
          @submit.prevent="handleLogin">
          <el-form-item prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
            <el-input
              v-model="loginForm.username"
              placeholder="用户名|手机号|邮箱"
              prefix-icon="el-icon-user"
              size="large">
            </el-input>
          </el-form-item>

          <el-form-item prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="密码"
              prefix-icon="el-icon-lock"
              show-password
              size="large">
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              native-type="submit"
              class="submit-btn"
              size="large"
              :loading="loginLoading">
              立即登录
            </el-button>
          </el-form-item>
        </el-form>

        <!-- 注册表单 -->
        <el-form
          v-else
          :model="registerForm"
          ref="registerForm"
          label-width="0"
          class="auth-form"
          @submit.prevent="handleRegister">
          <el-form-item prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
            <el-input
              v-model="registerForm.username"
              placeholder="用户名|邮箱"
              prefix-icon="el-icon-user"
              size="large">
            </el-input>
          </el-form-item>

          <el-form-item prop="nickname" :rules="[{ required: true, message: '请输入昵称', trigger: 'blur' }]">
            <el-input
              v-model="registerForm.nickname"
              placeholder="昵称"
              prefix-icon="el-icon-s-custom"
              size="large">
            </el-input>
          </el-form-item>

          <el-form-item prop="phone" :rules="phoneRules">
            <el-input
              type="tel"
              v-model="registerForm.phone"
              placeholder="手机号码"
              prefix-icon="el-icon-mobile-phone"
              size="large">
            </el-input>
          </el-form-item>

          <el-form-item prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
            <el-input
              type="password"
              v-model="registerForm.password"
              placeholder="密码"
              prefix-icon="el-icon-lock"
              show-password
              size="large">
            </el-input>
          </el-form-item>

          <el-form-item prop="confirmPassword" :rules="confirmPasswordRules">
            <el-input
              type="password"
              v-model="registerForm.confirmPassword"
              placeholder="确认密码"
              prefix-icon="el-icon-lock"
              show-password
              size="large">
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              native-type="submit"
              class="submit-btn"
              size="large"
              :loading="registerLoading">
              立即注册
            </el-button>
          </el-form-item>
        </el-form>

        <!-- 切换提示 -->
        <div class="switch-tip">
          <span v-if="activeTab === 'login'">还没有账户？</span>
          <span v-else>已有账户？</span>
          <el-button type="text" @click="activeTab = activeTab === 'login' ? 'register' : 'login'" class="switch-btn">
            {{ activeTab === 'login' ? '立即注册' : '立即登录' }}
          </el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { currentLogin } from '@/api/auth'
import { register } from '@/api/mockApi'

export default {
  name: 'Auth',
  data () {
    return {
      activeTab: 'login',
      loginLoading: false,
      registerLoading: false,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        nickname: '',
        phone: '',
        password: '',
        confirmPassword: ''
      },
      phoneRules: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^[0-9]{11}$/, message: '手机号格式不正确', trigger: 'blur' }
      ],
      confirmPasswordRules: [
        { required: true, message: '请确认密码', trigger: 'blur' },
        { validator: this.validateConfirmPassword, trigger: 'blur' }
      ]
    }
  },
  methods: {
    ...mapActions({ setUser: 'setUser' }),

    validateConfirmPassword (rule, value, callback) {
      if (value !== this.registerForm.password) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    },

    async handleLogin () {
      try {
        await this.$refs.loginForm.validate()
        this.loginLoading = true

        const response = await currentLogin({
          username: this.loginForm.username,
          password: this.loginForm.password
        })

        this.setUser(response.user)
        localStorage.setItem('token', response.token)
        this.$message.success('登录成功')
        this.$router.push('/')
      } catch (error) {
        console.error('登录失败:', error)
        this.$message.error('登录失败，请检查用户名和密码')
      } finally {
        this.loginLoading = false
      }
    },

    async handleRegister () {
      try {
        await this.$refs.registerForm.validate()
        this.registerLoading = true

        const result = await register(this.registerForm)

        this.$message.success(result.message || '注册成功')

        // 注册成功后自动切换到登录页面
        setTimeout(() => {
          this.activeTab = 'login'
          this.registerForm = {
            username: '',
            nickname: '',
            phone: '',
            password: '',
            confirmPassword: ''
          }
        }, 1500)
      } catch (error) {
        if (error.errors) {
          this.$message.error('请检查表单填写是否正确')
        } else {
          this.$message.error(error.message || '注册失败，请稍后重试')
        }
      } finally {
        this.registerLoading = false
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Helvetica Neue', Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}

.auth-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
}

.auth-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 30px 25px;
}

.tab-switch {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  border-bottom: 1px solid #e1e8ed;
  padding-bottom: 15px;
}

.tab-btn {
  flex: 1;
  margin: 0 5px;
  border-radius: 8px;
  font-weight: 600;
}

.auth-form {
  margin: 0;
}

.auth-form .el-form-item {
  margin-bottom: 18px;
}

.auth-form .el-input {
  font-size: 14px;
}

.auth-form .el-input__inner {
  border-radius: 8px;
  border: 1px solid #e1e8ed;
  transition: all 0.3s ease;
  font-size: 14px;
  padding: 12px 15px;
  height: 48px;
}

.auth-form .el-input__inner:focus {
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.1);
}

.submit-btn {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}

.switch-tip {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #7f8c8d;
}

.switch-btn {
  color: #409eff;
  font-weight: 500;
  margin-left: 5px;
  padding: 0;
}

.switch-btn:hover {
  color: #337ecc;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .auth-container {
    padding: 15px;
  }

  .auth-card {
    padding: 25px 20px;
  }
}
</style>

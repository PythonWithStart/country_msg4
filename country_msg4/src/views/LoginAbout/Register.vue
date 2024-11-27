<template>
  <div class="register-container">
    <el-card class="register-card" shadow="always">
      <el-row>
        <el-col :span="24">
          <h2 class="register-title">注册/登录</h2>
        </el-col>
      </el-row>
      <el-form :model="form" ref="form" label-width="120px" class="register-form">
        <el-form-item label="手机号码" prop="phone" :rules="phoneRules">
          <el-input type="tel" v-model="form.phone" placeholder="请输入您的手机号码" required></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input type="text" v-model="form.code" placeholder="输入验证码" required></el-input>
          <el-button type="text" @click="sendCode" :disabled="!isPhoneValid">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { loginPhone, sendCode as sendCodeApi } from '@/api/auth' // 更新导入路径

// 其他代码保持不变

export default {
  name: 'Register',
  data () {
    return {
      form: {
        phone: '',
        code: ''
      },
      phoneRules: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^[0-9]{11}$/, message: '手机号格式不正确', trigger: 'blur' }
      ]
    }
  },
  computed: {
    isPhoneValid () {
      return /^[0-9]{11}$/.test(this.form.phone) // 检查手机号码格式
    }
  },
  methods: {
    async handleSubmit () {
      // 提交表单的逻辑
      console.log('注册信息:', this.form)
      try {
        await loginPhone(this.form) // 调用登录 API
      } catch (error) {
        console.error('注册失败:', error)
      }
    },
    async sendCode () {
      // 发送验证码的逻辑
      console.log('发送验证码到:', this.form.phone)
      try {
        await sendCodeApi(this.form.phone) // 调用发送验证码 API
      } catch (error) {
        console.error('发送验证码失败:', error)
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color, #f9fafb);
}

.register-card {
  width: 30%;
  max-width: 21.875rem;
  margin: 2.5rem auto;
}

.register-title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.register-form {
  margin: 1rem 0;
}
</style>

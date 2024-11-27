<template>
  <div>
    <h1>登录日志</h1>
  </div>
</template>

<script>
export default {
  name: 'LoginLog',
  data () {
    return {
      loginLogs: []
    }
  },
  async created () {
    try {
      this.loginLogs = await fetchLoginLogs()
    } catch (error) {
      console.error('获取登录日志失败:', error)
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
</style>

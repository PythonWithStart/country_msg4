<template>
  <div>
    <h1>系统日志</h1>
  </div>
</template>

<script>
export default {
  name: 'SystemLog',
  data () {
    return {
      logs: []
    }
  },

  async created () {
    try {
      this.logs = await fetchLogs()
    } catch (error) {
      console.error('获取日志失败:', error)
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
</style>

<template>
  <div>
    <h1>日志管理</h1>
  </div>
</template>

<script>
import { fetchLogs } from '@/api/log'

export default {
  name: 'LogMange',
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

<template>
  <div>
    <h1>设置管理</h1>
  </div>
</template>

<script>
export default {
  name: 'SettingMange',
  data () {
    return {
      settings: []
    }
  },

  async created () {
    try {
      this.settings = await fetchSettings()
    } catch (error) {
      console.error('获取设置失败:', error)
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
</style>

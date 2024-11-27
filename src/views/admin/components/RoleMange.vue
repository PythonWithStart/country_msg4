<template>
  <div>
    <h1>角色管理</h1>
  </div>
</template>

<script>
export default {
  name: 'RoleMange',
  data () {
    return {
      roles: []
    }
  },

  async created () {
    try {
      this.roles = await fetchRoles()
    } catch (error) {
      console.error('获取角色失败:', error)
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
</style>

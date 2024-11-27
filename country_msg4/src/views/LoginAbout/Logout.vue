<template>
  <div>
    <el-alert
      title="您已成功登出。"
      type="success"
      show-icon
      banner
    ></el-alert>
    <el-button type="primary" @click="$router.push('/login')">返回登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'Logout' // 组件名称
}
</script>

<style>
/* 添加页面样式 */
</style>

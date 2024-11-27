<template>
  <el-header>
    <nav>
      <el-image src="../../../favicon.ico" alt="项目图标" style="height: 40px; margin-right: 15px;" />
      <el-input placeholder="搜索..." style="width: 20%; margin-right: 15px;" />
      <el-button type="primary" style="margin-right: 15px;">搜索</el-button>
      <router-link to="/register" style="margin-right: 15px;">
        <el-button type="text">注册</el-button>
      </router-link>
      <router-link to="/login" style="margin-right: 15px;">
        <el-button type="text">登录</el-button>
      </router-link>
      <router-link to="/orders" style="margin-right: 15px;">
        <el-button type="text">我的订单</el-button>
      </router-link>
      <router-link to="/contact" style="margin-right: 15px;">
        <el-button type="text">投诉渠道</el-button>
      </router-link>
    </nav>
  </el-header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
}
</style>

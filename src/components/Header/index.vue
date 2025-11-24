<template>
  <el-header>
    <nav>
      <el-image src="../../../favicon.ico" alt="项目图标" style="height: 40px; margin-right: 15px;" />
      <el-input placeholder="搜索..." style="width: 20%; margin-right: 15px;" />
      <el-button type="primary" style="margin-right: 15px;">搜索</el-button>

      <!-- 未登录状态 -->
      <template v-if="!isLoggedIn">
        <router-link to="/auth" style="margin-right: 15px;">
          <el-button type="text">登录</el-button>
        </router-link>
      </template>

      <!-- 已登录状态 -->
      <template v-else>
        <el-dropdown @command="handleCommand" style="margin-right: 15px;">
          <span class="el-dropdown-link">
            <i class="el-icon-user"></i>
            {{ (userInfo && userInfo.username) || '用户' }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item command="orders">我的订单</el-dropdown-item>
            <el-dropdown-item command="favorites">我的收藏</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>

      <router-link to="/orders" style="margin-right: 15px;">
        <el-button type="text">我的订单</el-button>
      </router-link>
      <router-link to="/contact" style="margin-right: 15px;">
        <el-button type="text">投诉渠道</el-button>
      </router-link>

      <!-- 购物车图标 -->
      <router-link to="/cart" style="margin-right: 15px;">
        <el-badge :value="cartItemCount" :hidden="cartItemCount === 0" class="item">
          <el-button type="text" icon="el-icon-shopping-cart">购物车</el-button>
        </el-badge>
      </router-link>
    </nav>
  </el-header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isLoggedIn', 'userInfo', 'cartItemCount'])
  },
  methods: {
    ...mapActions(['logout']),
    handleCommand (command) {
      switch (command) {
        case 'profile':
          this.$router.push('/user/profile')
          break
        case 'orders':
          this.$router.push('/orders')
          break
        case 'favorites':
          this.$router.push('/user/favorites')
          break
        case 'logout':
          this.logout()
          this.$message.success('已退出登录')
          this.$router.push('/')
          break
      }
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
}
</style>

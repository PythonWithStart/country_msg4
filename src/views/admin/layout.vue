<template>
  <div class="admin-layout">
    <div class="sidebar-module" :class="{ 'collapsed': isCollapsed }" style="background-color: darkgreen;">
      <div class="logo">管理平台</div>
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.name" @click="navigateTo(item)">
          <i :class="item.icon"></i>
          <span v-if="!isCollapsed">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <div class="header">
        <div class="global-info">
          <input type="text" placeholder="全局搜索" />
          <button>全局设置</button>
          <i class="user-icon"></i>
        </div>
      </div>
      <div class="module-display">
        <!-- 模块内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MangeLayout',
  data () {
    return {
      isCollapsed: false,
      menuItems: [
        { name: '项目一', icon: 'icon-project1', route: 'dashboard' },
        { name: '项目二', icon: 'icon-project2', route: 'system-log' },
        { name: '项目三', icon: 'icon-project3' }
      ]
    }
  },
  methods: {
    toggleSidebar () {
      this.isCollapsed = !this.isCollapsed
    },
    navigateTo (item) {
      if (item.route) {
        this.$router.push({ name: item.route })
      }
    }
  }
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}
.sidebar-module {
  width: 250px;
  transition: width 0.3s;
}
.sidebar-module.collapsed {
  width: 80px;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.header {
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.module-display {
  flex: 1;
}
</style>

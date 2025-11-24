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
        { name: '数据统计', icon: 'el-icon-s-data', route: 'Dashboard' },
        { name: '用户管理', icon: 'el-icon-user', route: 'UserMange' },
        { name: '产品管理', icon: 'el-icon-goods', route: 'ProductMange' },
        { name: '订单管理', icon: 'el-icon-tickets', route: 'OrderMange' },
        { name: '房间管理', icon: 'el-icon-house', route: 'RoomMange' },
        { name: '服务管理', icon: 'el-icon-service', route: 'ServiceMange' },
        { name: '角色管理', icon: 'el-icon-s-custom', route: 'RoleMange' },
        { name: '权限管理', icon: 'el-icon-lock', route: 'PermissionMange' },
        { name: '系统日志', icon: 'el-icon-document', route: 'SystemLog' },
        { name: '系统设置', icon: 'el-icon-setting', route: 'SettingMange' }
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

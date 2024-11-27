<template>
  <div>
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="地域导航" name="region-navigation">
        <RegionNavigation />
      </el-tab-pane>
      <el-tab-pane label="租房" name="rooms">
        <Rooms />
      </el-tab-pane>
      <el-tab-pane label="购买商品" name="products">
        <Products />
      </el-tab-pane>
      <el-tab-pane label="本地服务" name="local-services">
        <LocalServices />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import RegionNavigation from '@/views/RegionNavigation/RegionNavigation.vue' // 导入区域导航组件
import Rooms from '@/views/rooms/Rooms.vue' // 导入房间组件
import Products from '@/views/Product/Products.vue' // 导入产品组件
import LocalServices from '@/views/service/LocalServices.vue' // 导入本地服务组件

export default {
  name: 'Pagination',
  data () {
    return {
      activeTab: 'region-navigation' // 默认激活的标签
    }
  },
  components: {
    RegionNavigation,
    Rooms,
    Products,
    LocalServices
  },
  methods: {
    handleTabClick (tab) {
      console.log('当前选中的标签:', tab.name)
    }
  }
}
</script>

<style>
</style>

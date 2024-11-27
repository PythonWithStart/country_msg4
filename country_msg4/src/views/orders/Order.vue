<template>
  <div>
    <Header />
    <el-table :data="orders" style="width: 100%">
      <el-table-column prop="description" label="订单描述" width="180"></el-table-column>
      <el-table-column prop="price" label="价格" width="180"></el-table-column>
      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.image" alt="订单图片" style="width: 50px; height: 50px;">
        </template>
      </el-table-column>
    </el-table>
    <Footer />
  </div>
</template>

<script>
import { fetchOrders } from '@/api/order' // 确保导入路径正确
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'Order',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      orders: []
    }
  },
  async created () {
    try {
      this.orders = await fetchOrders() // 使用封装的 API 方法获取订单信息
      console.log('订单数据:', this.orders) // 添加调试信息
    } catch (error) {
      console.error('获取订单数据失败:', error)
    }
  }
}
</script>

<style scoped>
/* 添加页面样式 */
</style>

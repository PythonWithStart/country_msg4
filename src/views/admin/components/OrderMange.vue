<template>
  <div>
    <h1>订单管理</h1>
  </div>
</template>

<script>
export default {
  name: 'OrderMange',
  data () {
    return {
      orders: []
    }
  },

  async created () {
    try {
      this.orders = await fetchOrders()
    } catch (error) {
      console.error('获取订单失败:', error)
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
</style>

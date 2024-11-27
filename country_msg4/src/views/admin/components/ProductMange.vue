<template>
  <div>
    <h1>产品管理</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductMange',
  data () {
    return {
      products: []
    }
  },

  async created () {
    try {
      this.products = await fetchProducts()
    } catch (error) {
      console.error('获取产品失败:', error)
    }
  }
}
</script>

<style scoped>
/* 添加样式 */
</style>

<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品名称: {{ product.name }}</span>
      </div>
      <div>
        <p>价格: {{ product.price }}元</p>
        <el-button type="primary" @click="addToCart">加入购物车</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail', // 组件名称
  data () {
    return {
      product: {
        name: '钓鱼竿',
        price: 150
      }
    }
  },
  methods: {
    addToCart () {
      this.$message({
        message: '商品已加入购物车！',
        type: 'success'
      })
    }
  }
}
</script>

<style>
/* 添加页面样式 */
</style>

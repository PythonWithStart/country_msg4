<template>
  <div class="container">
    <Header />
    <p>服务名称: {{ service.name }}</p>
    <p>价格: {{ service.price }}元</p>
    <el-button @click="bookService">预订服务</el-button>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'LocalServiceDetail', // 组件名称
  components: {
    Header,
    Footer
  },
  data () {
    return {
      service: {
        name: '钓鱼',
        price: 200
      }
    }
  },
  methods: {
    bookService () {
      this.$message({
        message: '服务已预订！',
        type: 'success'
      })
    }
  }
}
</script>

<style>
/* 添加页面样式 */
</style>

<template>
  <div class="container">
    <Header />
    <el-row class="header-image-slider-spacing"></el-row> <!-- 基于Element UI调整间隔 -->
    <ImageSlider /> <!-- 添加滑动页面组件 -->
    <Pagination /> <!-- 确保 Pagination 组件已导入 -->
    <Footer />
  </div>
</template>

<script>
import ImageSlider from '@/views/home/components/ImageSlider.vue' // 确保导入
import Pagination from '@/views/home/components/Pagination.vue' // 确保导入
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'Start', // 组件名称
  components: {
    ImageSlider,
    Pagination,
    Header,
    Footer
  },
  data () {
    return {
      selectedService: ''
    }
  },
  methods: {
    navigateToService () {
      this.$router.push(`/${this.selectedService}-services`)
    }
  }
}
</script>

<style>
/* 保留必要的样式 */
.container {
  margin: 0 5%;
}

.ImageSlider {
  margin-left: -20px;
  margin-right: -20px;
}

.header-image-slider-spacing {
  height: 20px; /* 设置间隔高度 */
}
</style>

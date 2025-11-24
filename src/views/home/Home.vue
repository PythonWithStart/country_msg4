<template>
  <BaseLayout>
    <el-row class="header-image-slider-spacing"></el-row> <!-- 基于Element UI调整间隔 -->
    <ImageSlider /> <!-- 添加滑动页面组件 -->
    <Pagination /> <!-- 确保 Pagination 组件已导入 -->
  </BaseLayout>
</template>

<script>
import ImageSlider from '@/views/home/components/ImageSlider.vue' // 确保导入
import Pagination from '@/views/home/components/Pagination.vue' // 确保导入
import BaseLayout from '@/layout/BaseLayout.vue'

export default {
  name: 'Start', // 组件名称
  components: {
    ImageSlider,
    Pagination,
    BaseLayout
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
.ImageSlider {
  margin-left: -20px;
  margin-right: -20px;
}

</style>

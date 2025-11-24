<template>
  <div class="container">
    <Header />
    <div class="content">
      <slot></slot> <!-- 插槽用于插入具体页面的内容 -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'BaseLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保容器至少占据视口高度 */
  margin: 0 5%;
}

.content {
  flex-grow: 1; /* 内容区域占据剩余空间 */
}

.header-image-slider-spacing {
  height: 20px; /* 设置间隔高度 */
}
</style>

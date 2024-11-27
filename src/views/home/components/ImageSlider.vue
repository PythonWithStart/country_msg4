<template>
  <el-carousel :interval="5000" arrow="always" indicator-position="outside">
    <el-carousel-item v-for="(image, index) in images" :key="index">
      <img :src="image" alt="风景" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'ImageSlider',
  data () {
    return {
      images: []
    }
  },
  methods: {
    fetchImages () {
      this.images = [
        require('@/assets/images/image01.png'),
        require('@/assets/images/image02.png'),
        require('@/assets/images/image03.png'),
        require('@/assets/images/image04.png'),
        require('@/assets/images/image05.png'),
        require('@/assets/images/image06.png'),
        require('@/assets/images/image07.png')
      ]
    }
  },
  mounted () {
    this.fetchImages()
  }
}
</script>

<style>
.image-slider img {
  width: 10%;
  height: auto;
  display: block; /* 移除图片下方的空隙 */
}
.el-carousel__item {
  width: 80%;
  height: auto;
  margin: 0 20%;
}
</style>

<template>
  <div>
    <h1>欢迎来到旅游网站</h1>
    <TourList />
  </div>
</template>

<script>
import TourList from '@/components/TourList.vue'

export default {
  components: {
    TourList
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 20px 0;
}
</style>

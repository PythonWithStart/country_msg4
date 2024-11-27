<template>
  <el-container>
    <el-header>旅游列表</el-header>
    <el-main>
      <el-card
        class="box-card"
        v-for="tour in tours"
        :key="tour.id"
        :style="{ marginBottom: '20px' }"
      >
        <div slot="header">{{ tour.name }}</div>
        <p>{{ tour.description }}</p>
        <el-tag>{{ tour.price }}元</el-tag>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import { getTours } from '@/api'

export default {
  data () {
    return {
      tours: []
    }
  },
  created () {
    getTours().then(response => {
      console.log(response.data) // 添加调试信息
      this.tours = response.data.tours
    }).catch(error => {
      console.error('Error fetching tours:', error)
      // 请求失败时填充模拟数据
      this.tours = [
        { id: 1, name: '巴黎之旅', description: '探索浪漫的巴黎', price: 9999 },
        { id: 2, name: '东京之旅', description: '体验日本的文化和美食', price: 8888 },
        { id: 3, name: '纽约之旅', description: '感受美国的都市生活', price: 7777 }
      ]
    })
  }
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: white;
  text-align: center;
  line-height: 60px;
}
</style>

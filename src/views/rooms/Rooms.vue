<template>
  <div :height="300">
    <el-row type="flex" justify="left">
      <el-col :span="8">
        <el-input v-model="searchTerm" placeholder="请输入房间名称或描述" style="width: 50%; margin-bottom: 20px;" @input="handleSearch"></el-input>
      </el-col>
    </el-row>
    <el-row v-for="room in filteredRooms" :key="room.id" type="flex" justify="left">
      <el-col :span="8">
        <img :src="room.image" alt="房间图片" style="width: 100%; height: 200px; object-fit: cover;" />
      </el-col>
      <el-col :span="8">
        <h3>{{ room.title }}</h3>
        <p>{{ room.description }}</p>
      </el-col>
      <el-col :span="8">
        <h3>{{ room.price }}元</h3>
      </el-col>
      <el-col :span="4">
        <router-link :to="'/room-detail/' + room.id">
          <el-button type="primary" size="small">查看详情</el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchRooms } from '@/api/rooms'

export default {
  name: 'Rooms',
  data () {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        sort: '+id'
      },
      rooms: [], // 初始化为空数组
      searchTerm: '' // 初始化搜索词
    }
  },
  created () {
    // 直接使用模拟数据，避免API调用
    this.rooms = [
      { id: 1, title: '豪华套房', price: 580, description: '宽敞舒适的豪华套房，配备独立卫浴和阳台', image: require('@/assets/images/image01.png') },
      { id: 2, title: '标准双人间', price: 320, description: '温馨舒适的标准双人间，适合家庭出行', image: require('@/assets/images/image02.png') },
      { id: 3, title: '商务单人间', price: 280, description: '简约实用的商务单人间，配备工作区域', image: require('@/assets/images/image03.png') },
      { id: 4, title: '家庭套房', price: 450, description: '适合家庭入住的套房，配备儿童游乐区', image: require('@/assets/images/image04.png') },
      { id: 5, title: '海景房', price: 680, description: '无敌海景房，享受海风拂面的惬意时光', image: require('@/assets/images/image05.png') }
    ]
  },
  computed: {
    filteredRooms () {
      return this.rooms.filter(room => room.title.includes(this.searchTerm) || room.description.includes(this.searchTerm))
    }
  },
  methods: {
    handleSearch () {
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    async getList () {
      const { data } = await fetchRooms({
        ...this.listQuery
      })
      this.rooms = data.items
      this.total = data.total
    }
  }
}
</script>

<style scoped>
/* 添加页面样式 */
</style>

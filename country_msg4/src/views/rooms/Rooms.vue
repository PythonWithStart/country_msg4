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
  async created () {
    try {
      this.rooms = await fetchRooms() // 获取房间信息
    } catch (error) {
      console.error('获取房间信息失败:', error)
      // 如果获取失败，显示模拟数据
      this.rooms = [
        { id: 1, title: '房间一', price: 200, description: '这是房间一的描述', image: require('@/assets/images/image01.png') },
        { id: 2, title: '房间二', price: 150, description: '这是房间二的描述', image: require('@/assets/images/image01.png') },
        { id: 3, title: '房间三', price: 300, description: '这是房间三的描述', image: require('@/assets/images/image01.png') }
      ]
    }
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

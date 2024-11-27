<template>
  <div class="room-detail">
    <Header />
    <el-card class="box-card">
      <div class="room-info">
        <div class="room-image">
          <img :src="room.image" alt="房间图片" />
        </div>
        <div class="room-details">
          <p class="room-price">{{ room.price }}元</p>
          <p class="room-address">{{ room.address }}</p>
          <el-button type="primary" @click="bookRoom">预订房间</el-button>
        </div>
      </div>
      <div class="room-facilities">
        <div class="equipment-list">
          <p>设备列表:</p>
          <ul>
            <li v-for="(item, index) in room.equipmentList" :key="index">
              <img :src="item.icon" alt="" class="equipment-icon" />
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="surrounding-facilities">
          <p>周围设施:</p>
          <ul>
            <li v-for="(item, index) in room.facilities" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </el-card>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
export default {
  name: 'RoomDetail', // 组件名称
  components: {
    Header,
    Footer
  },
  data () {
    return {
      room: {} // 初始化为空对象
    }
  },
  created () {
    this.fetchRoomData() // 在组件创建时获取房间数据
  },
  methods: {
    fetchRoomData () {
      // 假设这里有一个获取房间数据的方法
      // 这里应该是发送请求获取数据的代码
      // 例如：axios.get('/api/room').then(response => {
      //   this.room = response.data;
      // }).catch(error => {
      //   console.error('获取房间数据失败:', error);
      // });
      // 为了示例，我们直接赋值
      this.room = {
        id: 1, // 添加id
        name: '豪华套房',
        price: 500,
        equipmentList: [
          { name: '电视', icon: '@/assets/images/equipment1.jpg' },
          { name: '空调', icon: '@/assets/images/equipment2.jpg' },
          { name: '冰箱', icon: '@/assets/images/equipment3.jpg' }
        ],
        equipmentIcon: '@/assets/images/equipment.jpg',
        address: '北京市朝阳区',
        facilities: ['超市', '餐馆', '地铁'],
        image: require('@/assets/images/service3.jpg') // 添加房间图片
      }
    },
    bookRoom () {
      this.$message({
        message: '房间已预订！',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
/* 添加页面样式 */
.room-detail {
  padding: 20px;
}

.box-card {
  margin-top: 20px;
}

.room-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.room-image {
  width: 50%;
}

.room-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.room-details {
  width: 45%;
}

.room-price {
  font-size: 20px;
  color: #ff5a5f;
  margin-bottom: 10px;
}

.room-address {
  color: #484848;
  margin-bottom: 10px;
}

.room-facilities {
  display: flex;
  justify-content: space-between;
}

.equipment-list,
.surrounding-facilities {
  width: 45%;
}

.equipment-list ul,
.surrounding-facilities ul {
  list-style: none;
  padding: 0;
}

.equipment-list li,
.surrounding-facilities li {
  margin-bottom: 5px;
}

.equipment-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>

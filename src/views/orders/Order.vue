<template>
  <BaseLayout>
    <div class="order-container">
      <h2>我的订单</h2>
      <el-table :data="orders" style="width: 100%" stripe>
        <el-table-column prop="orderNo" label="订单号" width="180px"></el-table-column>
        <el-table-column prop="description" label="订单描述" width="200px"></el-table-column>
        <el-table-column prop="price" label="价格" width="120px">
          <template slot-scope="scope">
            ¥{{ scope.row.price }}
          </template>
        </el-table-column>
        <el-table-column prop="quantity" label="数量" width="80px"></el-table-column>
        <el-table-column prop="totalAmount" label="总金额" width="120px">
          <template slot-scope="scope">
            ¥{{ scope.row.price * scope.row.quantity }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100px">
          <template slot-scope="scope">
            <el-tag :type="getStatusType(scope.row.status)">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="图片" width="120px">
          <template slot-scope="scope">
            <img :src="scope.row.image" alt="订单图片" style="width: 50px; height: 50px; border-radius: 4px;">
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="180px"></el-table-column>
        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status === '待支付'" type="primary" size="small" @click="payOrder(scope.row)">支付</el-button>
            <el-button v-if="scope.row.status === '已支付'" type="warning" size="small" @click="cancelOrder(scope.row)">取消</el-button>
            <el-button type="info" size="small" @click="viewDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layout/BaseLayout.vue'
// 直接使用模拟数据，避免API调用

export default {
  name: 'Order',
  components: {
    BaseLayout
  },
  data () {
    return {
      orders: []
    }
  },
  created () {
    // 直接使用模拟数据，避免API调用
    this.orders = [
      {
        id: 1,
        orderNo: 'ORD20251123001',
        description: '豪华套房预订',
        price: 580,
        quantity: 1,
        image: require('@/assets/images/image01.png'),
        status: '已确认',
        createTime: '2025-11-23 10:00:00'
      },
      {
        id: 2,
        orderNo: 'ORD20251122001',
        description: '标准双人间预订',
        price: 320,
        quantity: 2,
        image: require('@/assets/images/image02.png'),
        status: '已支付',
        createTime: '2025-11-22 15:30:00'
      },
      {
        id: 3,
        orderNo: 'ORD20251121001',
        description: '商务单人间预订',
        price: 280,
        quantity: 1,
        image: require('@/assets/images/image03.png'),
        status: '已完成',
        createTime: '2025-11-21 09:15:00'
      },
      {
        id: 4,
        orderNo: 'ORD20251123002',
        description: '家庭套房预订',
        price: 450,
        quantity: 1,
        image: require('@/assets/images/image04.png'),
        status: '已确认',
        createTime: '2025-11-23 14:20:00'
      },
      {
        id: 5,
        orderNo: 'ORD20251123003',
        description: '海景房预订',
        price: 680,
        quantity: 1,
        image: require('@/assets/images/image05.png'),
        status: '待支付',
        createTime: '2025-11-23 16:45:00'
      }
    ]
    console.log('订单数据:', this.orders) // 添加调试信息
  },
  methods: {
    getStatusType (status) {
      const statusMap = {
        待支付: 'danger',
        已支付: 'success',
        已确认: 'primary',
        已完成: 'info',
        已取消: 'warning'
      }
      return statusMap[status] || 'info'
    },
    payOrder (order) {
      this.$confirm(`确定要支付订单 ${order.orderNo} 吗?`, '确认支付', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        order.status = '已支付'
        this.$message({
          type: 'success',
          message: '支付成功!'
        })
      })
    },
    cancelOrder (order) {
      this.$confirm(`确定要取消订单 ${order.orderNo} 吗?`, '确认取消', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        order.status = '已取消'
        this.$message({
          type: 'success',
          message: '订单已取消!'
        })
      })
    },
    viewDetail (order) {
      this.$message({
        type: 'info',
        message: `查看订单 ${order.orderNo} 的详细信息`
      })
    }
  }
}
</script>

<style>
</style>

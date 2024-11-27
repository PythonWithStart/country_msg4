<template>
  <div>
    <h2>用户管理</h2>
    <h3>收集记录</h3>
    <ul>
      <li v-for="record in userRecords" :key="record.id">
        {{ record }}
      </li>
    </ul>
    <h3>消费记录</h3>
    <ul>
      <li v-for="purchase in userPurchases" :key="purchase.id">
        {{ purchase }}
      </li>
    </ul>
    <h3>购买记录</h3>
    <ul>
      <li v-for="purchase in userPurchases" :key="purchase.id">
        {{ purchase }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchUserRecords, fetchUserPurchases, fetchUserBuyRecords } from '@/api/user'

export default {
  data () {
    return {
      userRecords: [],
      userPurchases: [],
      userBuyRecords: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const [userRecords, userPurchases, userBuyRecords] = await Promise.all([
          fetchUserRecords(),
          fetchUserPurchases(),
          fetchUserBuyRecords()
        ])
        this.userRecords = userRecords
        this.userPurchases = userPurchases
        this.userBuyRecords = userBuyRecords
      } catch (error) {
        console.error('数据获取失败:', error)
      }
    }
  }
}
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>访客数量</span>
          </div>
          <div style="text-align: center;">
            <p>{{ visitors }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>家庭数量</span>
          </div>
          <div style="text-align: center;">
            <p>{{ families }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>总消费</span>
          </div>
          <div style="text-align: center;">
            <p>{{ totalSpending }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchVisitors, fetchFamilies, fetchTotalSpending } from '@/api/dashboard'

export default {
  name: 'Dashboard',
  data () {
    return {
      visitors: 0,
      families: 0,
      totalSpending: 0
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      Promise.all([
        fetchVisitors(),
        fetchFamilies(),
        fetchTotalSpending()
      ]).then(([visitors, families, totalSpending]) => {
        this.visitors = visitors
        this.families = families
        this.totalSpending = totalSpending
      }).catch(error => {
        this.$message.error('数据获取失败: ' + error)
      })
    }
  }
}
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
}
</style>

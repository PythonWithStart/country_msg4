<template>
  <div class="dashboard-container">
    <!-- 统计卡片 -->
    <el-row :gutter="20" class="stats-row">
      <el-col :span="6">
        <el-card class="stats-card" shadow="hover">
          <div class="stats-content">
            <div class="stats-icon" style="background-color: #409EFF;">
              <i class="el-icon-user"></i>
            </div>
            <div class="stats-info">
              <div class="stats-value">{{ visitors }}</div>
              <div class="stats-label">访客数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stats-card" shadow="hover">
          <div class="stats-content">
            <div class="stats-icon" style="background-color: #67C23A;">
              <i class="el-icon-house"></i>
            </div>
            <div class="stats-info">
              <div class="stats-value">{{ families }}</div>
              <div class="stats-label">家庭数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stats-card" shadow="hover">
          <div class="stats-content">
            <div class="stats-icon" style="background-color: #E6A23C;">
              <i class="el-icon-money"></i>
            </div>
            <div class="stats-info">
              <div class="stats-value">¥{{ totalSpending }}</div>
              <div class="stats-label">总消费</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stats-card" shadow="hover">
          <div class="stats-content">
            <div class="stats-icon" style="background-color: #F56C6C;">
              <i class="el-icon-shopping-cart"></i>
            </div>
            <div class="stats-info">
              <div class="stats-value">{{ orders }}</div>
              <div class="stats-label">订单数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 图表区域 -->
    <el-row :gutter="20" class="chart-row">
      <el-col :span="12">
        <el-card class="chart-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>访问趋势</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
          </div>
          <div class="chart-placeholder">
            <div style="text-align: center; padding: 50px 0; color: #909399;">
              <i class="el-icon-data-analysis" style="font-size: 48px; margin-bottom: 16px;"></i>
              <p>访问趋势图表</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="chart-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>收入统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
          </div>
          <div class="chart-placeholder">
            <div style="text-align: center; padding: 50px 0; color: #909399;">
              <i class="el-icon-pie-chart" style="font-size: 48px; margin-bottom: 16px;"></i>
              <p>收入统计图表</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 快速操作和最新动态 -->
    <el-row :gutter="20" class="action-row">
      <el-col :span="8">
        <el-card class="action-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>快速操作</span>
          </div>
          <div class="action-buttons">
            <el-button type="primary" icon="el-icon-plus" @click="handleAddUser">新增用户</el-button>
            <el-button type="success" icon="el-icon-goods" @click="handleAddProduct">新增产品</el-button>
            <el-button type="warning" icon="el-icon-tickets" @click="handleViewOrders">查看订单</el-button>
            <el-button type="info" icon="el-icon-setting" @click="handleSettings">系统设置</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="activity-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>最新动态</span>
          </div>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.time">
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
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
      totalSpending: 0,
      orders: 0,
      activities: [
        { time: '2025-11-23 15:30', content: '用户张三注册了新账户' },
        { time: '2025-11-23 14:45', content: '订单 #1001 已完成支付' },
        { time: '2025-11-23 13:20', content: '新增产品 "乡村特色民宿"' },
        { time: '2025-11-23 12:15', content: '系统备份已完成' },
        { time: '2025-11-23 11:30', content: '用户李四更新了个人信息' }
      ]
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
        this.orders = Math.floor(Math.random() * 100) + 50 // 模拟订单数据
      }).catch(error => {
        this.$message.error('数据获取失败: ' + error)
      })
    },
    handleAddUser() {
      this.$router.push({ name: 'UserMange' })
    },
    handleAddProduct() {
      this.$router.push({ name: 'ProductMange' })
    },
    handleViewOrders() {
      this.$router.push({ name: 'OrderMange' })
    },
    handleSettings() {
      this.$router.push({ name: 'SettingMange' })
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.stats-row {
  margin-bottom: 20px;
}

.stats-card {
  border-radius: 8px;
  border: none;
}

.stats-content {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.stats-icon {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 24px;
}

.stats-info {
  flex: 1;
}

.stats-value {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
  margin-bottom: 5px;
}

.stats-label {
  font-size: 14px;
  color: #909399;
}

.chart-row {
  margin-bottom: 20px;
}

.chart-card {
  border-radius: 8px;
  border: none;
}

.chart-placeholder {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.action-row {
  margin-bottom: 20px;
}

.action-card,
.activity-card {
  border-radius: 8px;
  border: none;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-buttons .el-button {
  width: 100%;
  margin: 0;
}

.el-timeline {
  padding-left: 10px;
}

.el-timeline-item {
  padding-bottom: 15px;
}
</style>

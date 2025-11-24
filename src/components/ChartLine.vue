<template>
  <div class="chart-container">
    <div v-if="chartData" class="chart-wrapper">
      <!-- 使用简单的进度条和统计卡片来模拟图表 -->
      <div class="chart-simple">
        <div class="chart-title">{{ title }}</div>
        <div class="chart-bars">
        <div
          v-for="(item, index) in chartData.data"
          :key="index"
          class="chart-bar-item"
        >
          <div class="bar-label">{{ item.name }}</div>
          <div class="bar-container">
            <div
              class="bar-fill"
              :style="{ width: calculateBarWidth(item.value) + '%' }"
            ></div>
            <span class="bar-value">{{ item.value }}</span>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div v-else class="chart-placeholder">
      <el-empty description="暂无数据"></el-empty>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartLine',
  props: {
    chartData: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: '图表'
    }
  },
  methods: {
    calculateBarWidth (value) {
      if (!this.chartData || !this.chartData.data || this.chartData.data.length === 0) {
        return 0
      }
      const maxValue = Math.max(...this.chartData.data.map(item => item.value))
      return maxValue > 0 ? (value / maxValue) * 100 : 0
    }
  }
}
</script>

<style scoped>
.chart-container {
  height: 300px;
  padding: 20px;
}

.chart-wrapper {
  height: 100%;
}

.chart-simple {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chart-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.chart-bars {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.chart-bar-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.bar-label {
  width: 80px;
  font-size: 14px;
  color: #666;
}

.bar-container {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.bar-fill {
  height: 20px;
  background: linear-gradient(90deg, #409EFF, #67C23A);
  border-radius: 10px;
  transition: width 0.5s ease;
  min-width: 20px;
}

.bar-value {
  font-size: 14px;
  color: #333;
  min-width: 40px;
  text-align: right;
}

.chart-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

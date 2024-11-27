<template>
  <div>
    <el-row :gutter="20">
      <!-- 上部 -->
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>全部访客数据量</span>
          </div>
          <div>
            <line-chart :chart-data="totalVisitorsData"></line-chart>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>全部营收统计</span>
          </div>
          <div>
            <line-chart :chart-data="totalRevenueData"></line-chart>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!-- 中部 -->
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>每日上线统计</span>
          </div>
          <div>
            <line-chart :chart-data="dailyOnlineData"></line-chart>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>每日上线时间累积统计</span>
          </div>
          <div>
            <line-chart :chart-data="cumulativeOnlineTimeData"></line-chart>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!-- 下部 -->
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>每日投诉数据量</span>
          </div>
          <div>
            <line-chart :chart-data="dailyComplaintsData"></line-chart>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>每日评论数据量</span>
          </div>
          <div>
            <line-chart :chart-data="dailyCommentsData"></line-chart>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!-- 评论词云和投诉词云 -->
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>评论词云</span>
          </div>
          <div>
            <img :src="commentsWordCloud" alt="评论词云图片" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>投诉词云</span>
          </div>
          <div>
            <img :src="complaintsWordCloud" alt="投诉词云图片" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchData } from '@/api/dataApi'

export default {
  name: 'DataStatistics',
  data () {
    return {
      dailyOnlineData: null,
      cumulativeOnlineTimeData: null,
      dailyRevenueData: null,
      dailyComplaintsData: null,
      dailyCommentsData: null,
      totalVisitorsData: null,
      totalRevenueData: null,
      commentsWordCloud: '',
      complaintsWordCloud: ''
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    async loadData () {
      try {
        const data = await fetchData()
        this.dailyOnlineData = data.dailyOnlineData
        this.cumulativeOnlineTimeData = data.cumulativeOnlineTimeData
        this.dailyRevenueData = data.dailyRevenueData
        this.dailyComplaintsData = data.dailyComplaintsData
        this.dailyCommentsData = data.dailyCommentsData
        this.totalVisitorsData = data.totalVisitorsData
        this.totalRevenueData = data.totalRevenueData
        this.commentsWordCloud = data.commentsWordCloud
        this.complaintsWordCloud = data.complaintsWordCloud
      } catch (error) {
        console.error('数据加载失败:', error)
      }
    }
  }
}
</script>

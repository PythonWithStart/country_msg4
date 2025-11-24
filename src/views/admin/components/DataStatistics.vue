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
// import { fetchData } from '@/api/dataApi'
// import ChartLine from '@/components/ChartLine.vue'

export default {
  name: 'DataStatistics',
  // components: {
  //   ChartLine
  // }
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
        // 模拟数据，实际项目中应该从API获取
        const mockData = {
          dailyOnlineData: {
            data: [
              { name: '周一', value: 120 },
              { name: '周二', value: 200 },
              { name: '周三', value: 150 },
              { name: '周四', value: 80 },
              { name: '周五', value: 70 },
              { name: '周六', value: 110 },
              { name: '周日', value: 130 }
            ]
          },
          cumulativeOnlineTimeData: {
            data: [
              { name: '周一', value: 450 },
              { name: '周二', value: 520 },
              { name: '周三', value: 480 },
              { name: '周四', value: 600 },
              { name: '周五', value: 550 },
              { name: '周六', value: 700 },
              { name: '周日', value: 650 }
            ]
          },
          dailyRevenueData: {
            data: [
              { name: '周一', value: 1200 },
              { name: '周二', value: 1800 },
              { name: '周三', value: 1500 },
              { name: '周四', value: 2000 },
              { name: '周五', value: 2200 },
              { name: '周六', value: 3000 },
              { name: '周日', value: 2800 }
            ]
          },
          dailyComplaintsData: {
            data: [
              { name: '周一', value: 5 },
              { name: '周二', value: 3 },
              { name: '周三', value: 7 },
              { name: '周四', value: 2 },
              { name: '周五', value: 4 },
              { name: '周六', value: 6 },
              { name: '周日', value: 1 }
            ]
          },
          dailyCommentsData: {
            data: [
              { name: '周一', value: 25 },
              { name: '周二', value: 30 },
              { name: '周三', value: 28 },
              { name: '周四', value: 35 },
              { name: '周五', value: 40 },
              { name: '周六', value: 50 },
              { name: '周日', value: 45 }
            ]
          },
          totalVisitorsData: {
            data: [
              { name: '1月', value: 1200 },
              { name: '2月', value: 1800 },
              { name: '3月', value: 1500 },
              { name: '4月', value: 2000 },
              { name: '5月', value: 2200 },
              { name: '6月', value: 3000 }
            ]
          },
          totalRevenueData: {
            data: [
              { name: '1月', value: 50000 },
              { name: '2月', value: 60000 },
              { name: '3月', value: 55000 },
              { name: '4月', value: 70000 },
              { name: '5月', value: 75000 },
              { name: '6月', value: 80000 }
            ]
          },
          commentsWordCloud: require('@/assets/images/service1.png'),
          complaintsWordCloud: require('@/assets/images/service2.jpg')
        }

        // 实际项目中应该使用API数据
        // const data = await fetchData()
        const data = mockData
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
        // 如果API调用失败，使用模拟数据
        this.loadMockData()
      }
    },
    loadMockData () {
      // 模拟数据加载
      const mockData = {
        dailyOnlineData: {
          data: [
            { name: '周一', value: 120 },
            { name: '周二', value: 200 },
            { name: '周三', value: 150 },
            { name: '周四', value: 80 },
            { name: '周五', value: 70 },
            { name: '周六', value: 110 },
            { name: '周日', value: 130 }
          ]
        },
        cumulativeOnlineTimeData: {
          data: [
            { name: '周一', value: 450 },
            { name: '周二', value: 520 },
            { name: '周三', value: 480 },
            { name: '周四', value: 600 },
            { name: '周五', value: 550 },
            { name: '周六', value: 700 },
            { name: '周日', value: 650 }
          ]
        },
        dailyRevenueData: {
          data: [
            { name: '周一', value: 1200 },
            { name: '周二', value: 1800 },
            { name: '周三', value: 1500 },
            { name: '周四', value: 2000 },
            { name: '周五', value: 2200 },
            { name: '周六', value: 3000 },
            { name: '周日', value: 2800 }
          ]
        },
        dailyComplaintsData: {
          data: [
            { name: '周一', value: 5 },
            { name: '周二', value: 3 },
            { name: '周三', value: 7 },
            { name: '周四', value: 2 },
            { name: '周五', value: 4 },
            { name: '周六', value: 6 },
            { name: '周日', value: 1 }
          ]
        },
        dailyCommentsData: {
          data: [
            { name: '周一', value: 25 },
            { name: '周二', value: 30 },
            { name: '周三', value: 28 },
            { name: '周四', value: 35 },
            { name: '周五', value: 40 },
            { name: '周六', value: 50 },
            { name: '周日', value: 45 }
          ]
        },
        totalVisitorsData: {
          data: [
            { name: '1月', value: 1200 },
            { name: '2月', value: 1800 },
            { name: '3月', value: 1500 },
            { name: '4月', value: 2000 },
            { name: '5月', value: 2200 },
            { name: '6月', value: 3000 }
          ]
        },
        totalRevenueData: {
          data: [
            { name: '1月', value: 50000 },
            { name: '2月', value: 60000 },
            { name: '3月', value: 55000 },
            { name: '4月', value: 70000 },
            { name: '5月', value: 75000 },
            { name: '6月', value: 80000 }
          ]
        },
        commentsWordCloud: require('@/assets/images/service1.png'),
        complaintsWordCloud: require('@/assets/images/service2.jpg')
      }

      this.dailyOnlineData = mockData.dailyOnlineData
      this.cumulativeOnlineTimeData = mockData.cumulativeOnlineTimeData
      this.dailyRevenueData = mockData.dailyRevenueData
      this.dailyComplaintsData = mockData.dailyComplaintsData
      this.dailyCommentsData = mockData.dailyCommentsData
      this.totalVisitorsData = mockData.totalVisitorsData
      this.totalRevenueData = mockData.totalRevenueData
      this.commentsWordCloud = mockData.commentsWordCloud
      this.complaintsWordCloud = mockData.complaintsWordCloud
    }
  }
}
</script>

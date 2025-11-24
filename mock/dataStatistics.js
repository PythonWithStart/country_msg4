// 数据统计模拟数据
export const getDataStatistics = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
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
      })
    }, 500)
  })
}

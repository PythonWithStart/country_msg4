// 订单模拟数据
const orders = [
  {
    id: 1,
    description: '豪华套房预订',
    price: 580,
    image: require('@/assets/images/image01.png'),
    status: '已确认',
    createTime: '2025-11-23 10:00:00'
  },
  {
    id: 2,
    description: '标准双人间预订',
    price: 320,
    image: require('@/assets/images/image02.png'),
    status: '已支付',
    createTime: '2025-11-22 15:30:00'
  },
  {
    id: 3,
    description: '商务单人间预订',
    price: 280,
    image: require('@/assets/images/image03.png'),
    status: '已完成',
    createTime: '2025-11-21 09:15:00'
  },
  {
    id: 4,
    description: '家庭套房预订',
    price: 450,
    image: require('@/assets/images/image04.png'),
    status: '已确认',
    createTime: '2025-11-23 14:20:00'
  },
  {
    id: 5,
    description: '海景房预订',
    price: 680,
    image: require('@/assets/images/image05.png'),
    status: '待支付',
    createTime: '2025-11-23 16:45:00'
  }
]

// 模拟API响应
export const fetchOrders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders)
    }, 500)
  })
}

export const getOrderById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = orders.find(item => item.id === id)
      if (order) {
        resolve(order)
      } else {
        reject(new Error('订单不存在'))
      }
    }, 300)
  })
}

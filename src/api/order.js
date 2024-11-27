import request from '@/utils/request' // 导入封装的请求方法
import axios from 'axios'

// 获取订单列表
export const fetchOrders = () => {
  return axios.get('/api/orders').then(response => response.data).catch(error => {
    console.error('获取订单失败:', error)
    throw error
  })
}

// 创建新订单
export const createOrder = (orderData) => {
  return request({
    url: '/orders',
    method: 'post',
    data: orderData
  })
}

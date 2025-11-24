// Mock API接口，用于访问mock数据
import { fetchOrders } from '../../mock/orders'
import { fetchRooms } from '../../mock/rooms'
import { fetchProducts } from '../../mock/products'
import { getDataStatistics } from '../../mock/dataStatistics'

// 订单相关API
export const getOrders = () => {
  return fetchOrders()
}

export const getOrderById = (id) => {
  return fetchOrders().then(orders => {
    const order = orders.find(item => item.id === id)
    if (order) {
      return order
    } else {
      throw new Error('订单不存在')
    }
  })
}

// 房间相关API
export const getRooms = () => {
  return fetchRooms()
}

export const getRoomById = (id) => {
  return fetchRooms().then(rooms => {
    const room = rooms.find(item => item.id === id)
    if (room) {
      return room
    } else {
      throw new Error('房间不存在')
    }
  })
}

// 产品相关API
export const getProducts = () => {
  return fetchProducts()
}

export const getProductById = (id) => {
  return fetchProducts().then(products => {
    const product = products.find(item => item.id === id)
    if (product) {
      return product
    } else {
      throw new Error('产品不存在')
    }
  })
}

// 数据统计相关API
export const getStatistics = () => {
  return getDataStatistics()
}

// 用户认证相关API（模拟）
export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        resolve({
          token: 'mock-jwt-token',
          userInfo: {
            id: 1,
            username: 'admin',
            nickname: '管理员',
            avatar: require('@/assets/images/service1.png')
          }
        })
      } else {
        reject(new Error('用户名或密码错误'))
      }
    }, 1000)
  })
}

export const register = (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: '注册成功',
        userInfo: {
          id: Math.floor(Math.random() * 1000),
          username: userData.username,
          nickname: userData.nickname,
          avatar: require('@/assets/images/service2.jpg')
        }
      })
    }, 1000)
  })
}

export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: '退出成功' })
    }, 500)
  })
}

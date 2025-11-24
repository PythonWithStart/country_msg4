import request from '@/utils/request'

export function getUsers() {
  return request({
    url: '/users',
    method: 'get'
  })
}

export function updateUser(data) {
  return request({
    url: '/users',
    method: 'put',
    data
  })
}

// 添加缺失的方法
export function fetchUserRecords(userId) {
  return request({
    url: `/users/${userId}/records`,
    method: 'get'
  })
}

export function fetchUserPurchases(userId) {
  return request({
    url: `/users/${userId}/purchases`,
    method: 'get'
  })
}

export function fetchUserBuyRecords(userId) {
  return request({
    url: `/users/${userId}/buy-records`,
    method: 'get'
  })
}
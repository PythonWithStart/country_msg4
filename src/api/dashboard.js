import request from '@/utils/request'

export function fetchVisitors () {
  return request({
    url: '/dashboard/visitors',
    method: 'get'
  })
}

export function fetchFamilies () {
  return request({
    url: '/dashboard/families',
    method: 'get'
  })
}

export function fetchTotalSpending () {
  return request({
    url: '/dashboard/totalSpending',
    method: 'get'
  })
}

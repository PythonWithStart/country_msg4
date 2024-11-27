import request from '@/utils/request' // 确保已有封装的 axios 实例

export function fetchData () {
  return request({
    url: '/api/statistics',
    method: 'get'
  })
}

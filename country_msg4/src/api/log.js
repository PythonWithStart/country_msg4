import request from '@/utils/request'

export function fetchLogs () {
  return request({
    url: '/logs',
    method: 'get'
  })
}

export function fetchOperationLogs () {
  return request({
    url: '/operation-logs',
    method: 'get'
  })
}

export function fetchLoginLogs () {
  return request({
    url: '/login-logs',
    method: 'get'
  })
}

import request from '@/utils/request'

export function getPermissions() {
  return request({
    url: '/permissions',
    method: 'get'
  })
}

export function updatePermission(data) {
  return request({
    url: '/permissions',
    method: 'put',
    data
  })
}

// 根据你的需要添加其他方法
export function fetchPermissionsForUser(userId) {
    return request({
      url: `/permissions/user/${userId}`,
      method: 'get'
    })
  }
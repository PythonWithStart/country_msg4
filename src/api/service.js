import request from '@/utils/request'

export function getServices() {
  return request({
    url: '/services',
    method: 'get'
  })
}

export function updateService(data) {
  return request({
    url: '/services',
    method: 'put',
    data
  })
}

export function fetchServices() {
    return request({
      url: '/services/list',
      method: 'get'
    })
  }
  
export function addService(data) {
    return request({
      url: '/services',
      method: 'post',
      data
    })
  }
  
export function deleteService(id) {
    return request({
      url: `/services/${id}`,
      method: 'delete'
})
}
import request from '@/utils/request'

export function fetchRooms (params) {
  return request({
    url: '/rooms',
    method: 'get',
    params
  })
}

export function fetchRoomDetail (id, params) {
  return request({
    url: `/rooms/${id}`,
    method: 'get',
    params
  })
}

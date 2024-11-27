import request from '@/utils/request' // 导入封装的请求方法

// 获取产品列表
export const fetchProducts = (params) => {
  return request({
    url: '/products',
    method: 'get',
    params
  })
}

// 获取单个产品详情
export const fetchProductDetail = (id, params) => {
  return request({
    url: `/product/${id}`,
    method: 'get',
    params
  })
}

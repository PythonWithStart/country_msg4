import request from '@/utils/request' // 导入封装的请求方法

// 登录 API
export const currentLogin = async ({ username, password }) => {
  return request({
    method: 'post',
    url: '/api/login',
    data: { username, password }
  }) // 替换为实际的后端API地址
}

// 登录 API（手机）
export const loginPhone = async (data) => {
  return request({
    method: 'post',
    url: '/api/login_phone',
    data
  }) // 替换为实际的后端API地址
}

// 发送验证码
export const sendCode = (phone) => {
  return request({
    method: 'post',
    url: '/api/send-code',
    data: { phone }
  }) // 替换为实际的后端API地址
}

const TOKEN_KEY = 'your_token_key' // 替换为您的实际 token key

export function getToken () {
  return localStorage.getItem(TOKEN_KEY) // 从 localStorage 获取 token
}

export function setToken (token) {
  localStorage.setItem(TOKEN_KEY, token) // 设置 token 到 localStorage
}

export function removeToken () {
  localStorage.removeItem(TOKEN_KEY) // 从 localStorage 移除 token
}

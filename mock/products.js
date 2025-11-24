// 产品模拟数据
const products = [
  {
    id: 1,
    name: '智能手机',
    price: 2999,
    shoeName: '商店一',
    category: '电子产品',
    description: '高性能智能手机，配备最新处理器',
    image: require('@/assets/images/service1.png'),
    stock: 50
  },
  {
    id: 2,
    name: '笔记本电脑',
    price: 5999,
    shoeName: '商店一',
    category: '电子产品',
    description: '轻薄便携笔记本电脑，适合商务办公',
    image: require('@/assets/images/service2.jpg'),
    stock: 30
  },
  {
    id: 3,
    name: '平板电脑',
    price: 1999,
    shoeName: '商店一',
    category: '电子产品',
    description: '娱乐学习两不误的平板电脑',
    image: require('@/assets/images/service3.jpg'),
    stock: 40
  },
  {
    id: 4,
    name: '智能手表',
    price: 899,
    shoeName: '商店二',
    category: '智能穿戴',
    description: '健康监测智能手表',
    image: require('@/assets/images/image06.png'),
    stock: 60
  },
  {
    id: 5,
    name: '蓝牙耳机',
    price: 399,
    shoeName: '商店二',
    category: '音频设备',
    description: '无线蓝牙耳机，音质清晰',
    image: require('@/assets/images/image07.png'),
    stock: 80
  },
  {
    id: 6,
    name: '数码相机',
    price: 4599,
    shoeName: '商店二',
    category: '摄影器材',
    description: '专业级数码相机',
    image: require('@/assets/images/image08.png'),
    stock: 20
  },
  {
    id: 7,
    name: '游戏主机',
    price: 2499,
    shoeName: '商店二',
    category: '游戏设备',
    description: '最新款游戏主机',
    image: require('@/assets/images/service1.png'),
    stock: 25
  },
  {
    id: 8,
    name: '显示器',
    price: 1299,
    shoeName: '商店二',
    category: '电脑配件',
    description: '高清显示器',
    image: require('@/assets/images/service2.jpg'),
    stock: 35
  },
  {
    id: 9,
    name: '机械键盘',
    price: 599,
    shoeName: '商店二',
    category: '电脑配件',
    description: '机械键盘，打字手感舒适',
    image: require('@/assets/images/service3.jpg'),
    stock: 45
  },
  {
    id: 10,
    name: '无线鼠标',
    price: 199,
    shoeName: '商店二',
    category: '电脑配件',
    description: '无线鼠标，使用方便',
    image: require('@/assets/images/image06.png'),
    stock: 100
  }
]

// 模拟API响应
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(item => item.id === id)
      if (product) {
        resolve(product)
      } else {
        reject(new Error('产品不存在'))
      }
    }, 300)
  })
}

// 房间模拟数据
const rooms = [
  {
    id: 1,
    title: '豪华套房',
    price: 580,
    description: '宽敞舒适的豪华套房，配备独立卫浴和阳台',
    image: require('@/assets/images/image01.png'),
    type: '套房',
    area: '45㎡',
    capacity: 2,
    amenities: ['独立卫浴', '阳台', '空调', '电视', '免费WiFi']
  },
  {
    id: 2,
    title: '标准双人间',
    price: 320,
    description: '温馨舒适的标准双人间，适合家庭出行',
    image: require('@/assets/images/image02.png'),
    type: '标准间',
    area: '30㎡',
    capacity: 2,
    amenities: ['独立卫浴', '空调', '电视', '免费WiFi']
  },
  {
    id: 3,
    title: '商务单人间',
    price: 280,
    description: '简约实用的商务单人间，配备工作区域',
    image: require('@/assets/images/image03.png'),
    type: '单人间',
    area: '25㎡',
    capacity: 1,
    amenities: ['独立卫浴', '空调', '电视', '免费WiFi', '工作桌']
  },
  {
    id: 4,
    title: '家庭套房',
    price: 450,
    description: '适合家庭入住的套房，配备儿童游乐区',
    image: require('@/assets/images/image04.png'),
    type: '家庭套房',
    area: '50㎡',
    capacity: 4,
    amenities: ['独立卫浴', '空调', '电视', '免费WiFi', '儿童游乐区']
  },
  {
    id: 5,
    title: '海景房',
    price: 680,
    description: '无敌海景房，享受海风拂面的惬意时光',
    image: require('@/assets/images/image05.png'),
    type: '海景房',
    area: '40㎡',
    capacity: 2,
    amenities: ['独立卫浴', '阳台', '空调', '电视', '免费WiFi', '海景']
  }
]

// 模拟API响应
export const fetchRooms = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rooms)
    }, 500)
  })
}

export const getRoomById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const room = rooms.find(item => item.id === id)
      if (room) {
        resolve(room)
      } else {
        reject(new Error('房间不存在'))
      }
    }, 300)
  })
}

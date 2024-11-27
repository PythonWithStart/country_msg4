import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import Register from '@/views/LoginAbout/Register.vue'
import Login from '@/views/LoginAbout/Login.vue' // 确保导入了 Login 组件
import Contact from '@/views/Contact.vue'
import Order from '@/views/orders/Order.vue' // 确保导入了 Order 组件
import RoomDetail from '@/views/rooms/RoomDetail.vue'
import LocalServiceDetail from '@/views/service/LocalServiceDetail.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import Datastatistices from '@/views/admin/components/DataStatistics.vue'
import Layout from '@/views/admin/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login', // 确保路由配置正确
    name: 'Login',
    component: Login
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/orders', // 确保路由配置正确
    name: 'Order',
    component: Order
  },
  {
    path: '/room-detail/:id',
    name: 'RoomDetail',
    component: RoomDetail
  },
  {
    path: '/local-service-detail/1',
    name: 'LocalServiceDetail',
    component: LocalServiceDetail
  },
  {
    path: '/mangeControl',
    name: 'MangeLayout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/Datastatistices',
        name: 'Datastatistices',
        component: Datastatistices
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

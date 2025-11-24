import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import Auth from '@/views/LoginAbout/Auth.vue' // 导入统一的认证页面
import Contact from '@/views/Contact.vue'
import Order from '@/views/orders/Order.vue' // 确保导入了 Order 组件
import Cart from '@/views/cart/Cart.vue' // 导入购物车组件
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
    path: '/auth', // 统一的认证页面
    name: 'Auth',
    component: Auth
  },
  {
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
    path: '/cart', // 添加购物车路由
    name: 'Cart',
    component: Cart
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
      },
      {
        path: '/UserMange',
        name: 'UserMange',
        component: () => import('@/views/admin/components/UserMange.vue')
      },
      {
        path: '/ProductMange',
        name: 'ProductMange',
        component: () => import('@/views/admin/components/ProductMange.vue')
      },
      {
        path: '/OrderMange',
        name: 'OrderMange',
        component: () => import('@/views/admin/components/OrderMange.vue')
      },
      {
        path: '/RoomMange',
        name: 'RoomMange',
        component: () => import('@/views/admin/components/RoomMange.vue')
      },
      {
        path: '/ServiceMange',
        name: 'ServiceMange',
        component: () => import('@/views/admin/components/ServiceMange.vue')
      },
      {
        path: '/RoleMange',
        name: 'RoleMange',
        component: () => import('@/views/admin/components/RoleMange.vue')
      },
      {
        path: '/PermissionMange',
        name: 'PermissionMange',
        component: () => import('@/views/admin/components/PermissionMange.vue')
      },
      {
        path: '/SystemLog',
        name: 'SystemLog',
        component: () => import('@/views/admin/components/SystemLog.vue')
      },
      {
        path: '/SettingMange',
        name: 'SettingMange',
        component: () => import('@/views/admin/components/SettingMange.vue')
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

import Vue from 'vue'
import Vuex from 'vuex'
import { getTours } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tours: [],
    token: getToken(),
    userInfo: null,
    isLoggedIn: false,
    cart: {
      items: [],
      total: 0
    }
  },
  mutations: {
    setTours (state, tours) {
      state.tours = tours
    },
    SET_TOKEN (state, token) {
      state.token = token
      state.isLoggedIn = !!token
    },
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo
    },
    CLEAR_USER (state) {
      state.token = ''
      state.userInfo = null
      state.isLoggedIn = false
    },
    ADD_TO_CART (state, item) {
      const existingItem = state.cart.items.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity += item.quantity || 1
      } else {
        state.cart.items.push({ ...item, quantity: item.quantity || 1 })
      }
      state.cart.total = state.cart.items.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
    },
    REMOVE_FROM_CART (state, itemId) {
      state.cart.items = state.cart.items.filter(item => item.id !== itemId)
      state.cart.total = state.cart.items.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
    },
    UPDATE_CART_ITEM_QUANTITY (state, { itemId, quantity }) {
      const item = state.cart.items.find(cartItem => cartItem.id === itemId)
      if (item) {
        item.quantity = quantity
        state.cart.total = state.cart.items.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
      }
    },
    CLEAR_CART (state) {
      state.cart.items = []
      state.cart.total = 0
    }
  },
  actions: {
    fetchTours ({ commit }) {
      getTours().then(response => {
        commit('setTours', response.data.tours)
      }).catch(error => {
        console.error('Error fetching tours:', error)
      })
    },
    login ({ commit }, { token, userInfo }) {
      commit('SET_TOKEN', token)
      commit('SET_USER_INFO', userInfo)
      setToken(token)
    },
    logout ({ commit }) {
      commit('CLEAR_USER')
      removeToken()
    },
    updateUserInfo ({ commit }, userInfo) {
      commit('SET_USER_INFO', userInfo)
    },
    addToCart ({ commit }, item) {
      commit('ADD_TO_CART', item)
    },
    removeFromCart ({ commit }, itemId) {
      commit('REMOVE_FROM_CART', itemId)
    },
    updateCartItemQuantity ({ commit }, payload) {
      commit('UPDATE_CART_ITEM_QUANTITY', payload)
    },
    clearCart ({ commit }) {
      commit('CLEAR_CART')
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    userInfo: state => state.userInfo,
    token: state => state.token,
    cartItems: state => state.cart.items,
    cartTotal: state => state.cart.total,
    cartItemCount: state => state.cart.items.reduce((count, item) => count + item.quantity, 0)
  }
})

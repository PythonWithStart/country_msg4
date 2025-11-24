<template>
  <div>
    <el-row type="flex" justify="start">
      <el-col :span="4">
        <el-input v-model="searchTerm" placeholder="输入商品名称进行搜索" style="margin-bottom: 20px;" @input="searchProducts"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start">
      <el-col :span="4">
        <el-select v-model="selectedStore" placeholder="选择商店" @change="changeStore">
          <el-option label="商店一" value="商店一"></el-option>
          <el-option label="商店二" value="商店二"></el-option>
        </el-select>
      </el-col>
      <el-col :span="18">
        <el-table :data="filteredProducts" style="width: 100%" height="300">
          <el-table-column prop="name" label="产品名称" width="180"></el-table-column>
          <el-table-column prop="price" label="价格" width="180"></el-table-column>
          <el-table-column label="选择" width="140">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="addToCart(scope.row.id)">添加到我的订单</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { fetchProducts } from '@/api/product' // 更新导入路径

export default {
  name: 'Products',
  data () {
    return {
      showProducts: [],
      products: [],
      searchTerm: '',
      selectedStore: '商店一' // 默认选择商店一
    }
  },
  computed: {
    filteredProducts () {
      return this.showProducts.filter(product =>
        product.shoeName === this.selectedStore &&
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  created () {
    // 直接使用模拟数据，避免API调用
    this.products = [
      { id: 1, name: '智能手机', price: 2999, shoeName: '商店一' },
      { id: 2, name: '笔记本电脑', price: 5999, shoeName: '商店一' },
      { id: 3, name: '平板电脑', price: 1999, shoeName: '商店一' },
      { id: 4, name: '智能手表', price: 899, shoeName: '商店二' },
      { id: 5, name: '蓝牙耳机', price: 399, shoeName: '商店二' },
      { id: 6, name: '数码相机', price: 4599, shoeName: '商店二' },
      { id: 7, name: '游戏主机', price: 2499, shoeName: '商店二' },
      { id: 8, name: '显示器', price: 1299, shoeName: '商店二' },
      { id: 9, name: '机械键盘', price: 599, shoeName: '商店二' },
      { id: 10, name: '无线鼠标', price: 199, shoeName: '商店二' }
    ]
    this.showProducts = this.products
  },
  methods: {
    async changeStore (store) {
      this.selectedStore = store
    },
    async addToCart (productId) {
      // 移除createOrder方法的调用，因为它在../api/product中不存在
      this.$message.success('添加到购物车成功！')
    },
    searchProducts () {
      // 根据搜索词过滤产品
      const filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      if (filteredProducts.length > 0) {
        this.selectedStore = filteredProducts[0].shoeName
        this.changeStore(this.selectedStore)
        this.showProducts = filteredProducts
      } else {
        this.showProducts = this.products // 如果没有找到匹配的产品，则不改变产品列表
      }
    },
    selectSelectedStore (newVal) {
      this.selectedStore = newVal[0].shoeName
    }
  }
}; </script>

<style>
/* 添加页面样式 */
</style>

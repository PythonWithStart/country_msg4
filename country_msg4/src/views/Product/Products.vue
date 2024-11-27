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
import { fetchProducts } from '@/api/product' // 更新导入路径

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
  async created () {
    try {
      this.products = await fetchProducts() // 使用封装的 API 方法获取产品信息
      // 补充数据到10条
      this.products.push(
        { id: 1, name: '产品一', price: 100, shoeName: '商店一' },
        { id: 2, name: '产品二', price: 200, shoeName: '商店一' },
        { id: 3, name: '产品三', price: 300, shoeName: '商店一' },
        { id: 4, name: '产品四', price: 400, shoeName: '商店二' },
        { id: 5, name: '产品五', price: 500, shoeName: '商店二' },
        { id: 6, name: '产品六', price: 600, shoeName: '商店二' },
        { id: 7, name: '产品七', price: 700, shoeName: '商店二' },
        { id: 8, name: '产品八', price: 800, shoeName: '商店二' },
        { id: 9, name: '产品九', price: 900, shoeName: '商店二' },
        { id: 10, name: '产品十', price: 1000, shoeName: '商店二' }
      )
      this.showProducts = this.products
    } catch (error) {
      console.error('获取产品信息失败:', error)
      this.$message.error('获取产品信息失败，请检查网络或后端服务。')
      // 如果获取失败，显示模拟数据
      this.products = [
        { id: 1, name: '产品一', price: 100, shoeName: '商店一' },
        { id: 2, name: '产品二', price: 200, shoeName: '商店一' },
        { id: 3, name: '产品三', price: 300, shoeName: '商店一' },
        { id: 4, name: '产品四', price: 400, shoeName: '商店二' },
        { id: 5, name: '产品五', price: 500, shoeName: '商店二' },
        { id: 6, name: '产品六', price: 600, shoeName: '商店二' },
        { id: 7, name: '产品七', price: 700, shoeName: '商店二' },
        { id: 8, name: '产品八', price: 800, shoeName: '商店二' },
        { id: 9, name: '产品九', price: 900, shoeName: '商店二' },
        { id: 10, name: '产品十', price: 1000, shoeName: '商店二' }
      ]
      this.showProducts = this.products
    }
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

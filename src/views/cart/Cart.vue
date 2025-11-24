<template>
  <BaseLayout>
    <div class="cart-container">
      <h2>购物车</h2>

      <!-- 购物车为空时显示 -->
      <div v-if="cartItems.length === 0" class="empty-cart">
        <el-empty description="购物车为空">
          <el-button type="primary" @click="$router.push('/products')">去购物</el-button>
        </el-empty>
      </div>

      <!-- 购物车有商品时显示 -->
      <div v-else>
        <el-table :data="cartItems" style="width: 100%">
          <el-table-column label="商品" width="300">
            <template slot-scope="scope">
              <div class="product-info">
                <img :src="scope.row.image" :alt="scope.row.name" class="product-image">
                <div class="product-details">
                  <h4>{{ scope.row.name }}</h4>
                  <p class="category">{{ scope.row.category }}</p>
                </div>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="单价" width="120">
            <template slot-scope="scope">
              ¥{{ scope.row.price }}
            </template>
          </el-table-column>

          <el-table-column label="数量" width="150">
            <template slot-scope="scope">
              <el-input-number
                v-model="scope.row.quantity"
                :min="1"
                :max="scope.row.stock"
                @change="updateQuantity(scope.row)"
                size="small">
              </el-input-number>
            </template>
          </el-table-column>

          <el-table-column label="小计" width="120">
            <template slot-scope="scope">
              ¥{{ scope.row.price * scope.row.quantity }}
            </template>
          </el-table-column>

          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                type="danger"
                size="small"
                @click="removeFromCart(scope.row.id)"
                icon="el-icon-delete">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 购物车汇总 -->
        <div class="cart-summary">
          <div class="summary-info">
            <p>商品总数: {{ totalItems }} 件</p>
            <p class="total-price">总计: ¥{{ totalPrice }}</p>
          </div>
          <div class="actions">
            <el-button @click="$router.push('/products')">继续购物</el-button>
            <el-button type="primary" @click="checkout">结算</el-button>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layout/BaseLayout.vue'

export default {
  name: 'Cart',
  components: {
    BaseLayout
  },
  data () {
    return {
      cartItems: [
        {
          id: 1,
          name: '智能手机',
          price: 2999,
          category: '电子产品',
          image: require('@/assets/images/service1.png'),
          quantity: 1,
          stock: 50
        },
        {
          id: 2,
          name: '笔记本电脑',
          price: 5999,
          category: '电子产品',
          image: require('@/assets/images/service2.jpg'),
          quantity: 1,
          stock: 30
        }
      ]
    }
  },
  computed: {
    totalItems () {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice () {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  },
  methods: {
    updateQuantity (item) {
      console.log(`更新商品 ${item.name} 数量为: ${item.quantity}`)
      // 这里可以添加保存到本地存储的逻辑
    },
    removeFromCart (productId) {
      this.$confirm('确定要删除这个商品吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.cartItems = this.cartItems.filter(item => item.id !== productId)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
    },
    checkout () {
      this.$confirm('确定要结算吗?', '确认结算', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '结算成功! 订单已生成'
        })
        // 这里可以添加订单生成的逻辑
        this.cartItems = []
      })
    }
  }
}
</script>

<style scoped>
.cart-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.empty-cart {
  text-align: center;
  padding: 50px 0;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 4px;
}

.product-details h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
}

.category {
  color: #999;
  font-size: 12px;
  margin: 0;
}

.cart-summary {
  margin-top: 30px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-info p {
  margin: 5px 0;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
  color: #e6a23c;
}

.actions {
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  .cart-summary {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .actions {
    justify-content: center;
  }
}
</style>

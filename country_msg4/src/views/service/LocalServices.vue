<template>
  <div>
    <el-table :data="services" style="width: 100%">
      <!-- <el-table-column prop="id" label="ID" width="60"></el-table-column> -->
      <el-table-column label="服务名称" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.image" alt="服务图片" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;" />
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="服务简介" width="180"></el-table-column>
      <el-table-column prop="price" label="价格" width="100"></el-table-column>
      <el-table-column label="服务链接" width="180">
        <template slot-scope="scope">
          <router-link :to="'/local-service-detail/' + scope.row.id">
            <el-button type="primary" size="small">查看详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'LocalServices', // 组件名称
  data () {
    return {
      services: [ // 添加服务列表数据
        { id: 1, name: '服务一', description: '这是服务一的简介', price: 100, link: 'https://example.com/service1', image: require('@/assets/images/service1.png') },
        { id: 2, name: '服务二', description: '这是服务二的简介', price: 150, link: 'https://example.com/service2', image: require('@/assets/images/service1.png') },
        { id: 3, name: '服务三', description: '这是服务三的简介', price: 200, link: 'https://example.com/service3', image: require('@/assets/images/service1.png') }
      ]
    }
  }
}
</script>

<style scoped>
/* 添加页面样式 */
</style>

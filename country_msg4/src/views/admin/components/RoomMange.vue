<template>
<el-button type="primary" @click="batchAddRooms">批量添加</el-button>
<el-table
  :data="rooms"
  style="width: 100%"
  :row-class-name="tableRowClassName"
>
  <el-table-column
    prop="name"
    label="房间名称"
    width="180">
  </el-table-column>
  <el-table-column
    prop="price"
    label="房间价格"
    width="100">
  </el-table-column>
  <el-table-column
    prop="status"
    label="状态"
    width="100">
  </el-table-column>
  <el-table-column
    prop="owner"
    label="产权人"
    width="180">
  </el-table-column>
</el-table>
</template>

<script>
export default {
  data () {
    return {
      rooms: [
        {
          name: '房间1',
          price: 100,
          status: '空闲',
          owner: '张三'
        },
        {
          name: '房间2',
          price: 200,
          status: '已租',
          owner: '李四'
        },
        {
          name: '房间3',
          price: 300,
          status: '空闲',
          owner: '王五'
        }
      ]
    }
  },
  methods: {
    tableRowClassName (row, index) {
      if (index === 1) {
        return 'warning-row'
      } else if (index === 3) {
        return 'success-row'
      }
      return ''
    },
    batchAddRooms () {
      // 批量添加房间的逻辑
      console.log('批量添加房间')
    }
  }
}
</script>

<style scoped>
.warning-row {
  background: oldlace;
}
.success-row {
  background: lightgreen;
}
</style>

<template>
  <div>
    <h1>操作日志</h1>
    <el-table :data="operationLogs" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OperationLog',
  data () {
    return {
      operationLogs: []
    }
  },

  async created () {
    try {
      this.operationLogs = await fetchOperationLogs()
    } catch (error) {
      console.error('获取操作日志失败:', error)
    }
  }
}
</script>

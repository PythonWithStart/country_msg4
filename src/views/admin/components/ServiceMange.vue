<template>
  <div style="margin: 0 5%;">
    <el-button type="primary" @click="toggleLockAll">全局锁定</el-button>
    <el-button type="primary" @click="batchAddServices">批量添加</el-button>
    <el-table
      :data="services"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        prop="name"
        label="服务名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="100">
      </el-table-column>
      <el-table-column
        prop="contact"
        label="联系人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="运行状态"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="addService">添加服务</el-button>
    <el-dialog
      title="编辑服务"
      :visible.sync="editDialogVisible"
      width="30%">
      <el-form :model="editingService" label-width="100px">
        <el-form-item label="服务名称">
          <el-input v-model="editingService.name" autocomplete="off" :disabled="isAllLocked"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="editingService.price" autocomplete="off" :disabled="isAllLocked"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="editingService.contact" autocomplete="off" style="width: 100%" :disabled="isAllLocked"></el-input>
        </el-form-item>
        <el-form-item label="运行状态">
          <el-select v-model="editingService.status" placeholder="请选择运行状态" style="width: 100%" :disabled="isAllLocked">
            <el-option label="预上线" value="预上线"></el-option>
            <el-option label="上线" value="上线"></el-option>
            <el-option label="下线" value="下线"></el-option>
            <el-option label="取消" value="取消"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit" :disabled="isAllLocked">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="批量添加服务"
      :visible.sync="batchAddDialogVisible"
      width="30%">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传json文件，且不超过2个</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="batchAddDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitBatchAdd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { fetchServices, updateService, addService, deleteService } from '@/api/service'

export default {
  data () {
    return {
      services: [],
      tempServices: [],
      originalServices: [], // 用于存储初始数据
      editingIndex: -1,
      isAllLocked: false,
      editDialogVisible: false,
      batchAddDialogVisible: false,
      fileList: [],
      editingService: {}
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const services = await fetchServices()
        this.services = services
        this.originalServices = services.map(service => ({ ...service })) // 将初始数据存储到originalServices中
      } catch (error) {
        console.error('数据获取失败:', error)
      }
    },
    tableRowClassName ({ row, rowIndex }) {
      if (row.locked) {
        return 'locked-row'
      }
      return ''
    },
    handleEdit (index, row) {
      if (row.locked || this.isAllLocked) return
      this.editingIndex = index
      this.editingService = { ...row, editing: true }
      this.editDialogVisible = true
    },
    async submitEdit () {
      if (this.isAllLocked) return
      try {
        this.$set(this.services, this.editingIndex, { ...this.editingService, editing: false })
        this.editingIndex = -1
        this.editDialogVisible = false
        // 检查是否有数据需要上传到后端
        const updatedServices = this.services.filter(service => service.id && service !== this.originalServices.find(originalService => originalService.id === service.id))
        if (updatedServices.length > 0) {
          await Promise.all(updatedServices.map(service => updateService(service)))
          console.log('数据更新成功')
        }
      } catch (error) {
        console.error('数据保存失败:', error)
      }
    },
    async addService () {
      if (this.isAllLocked) return
      try {
        const newRow = { name: '', price: 0, contact: '', status: '预上线', editing: true }
        this.tempServices.push(newRow)
        this.editingIndex = this.tempServices.length - 1
        this.editingService = newRow
        this.editDialogVisible = true
        // 检查是否有数据需要上传到后端
        if (newRow.id) {
          await addService(newRow)
          console.log('数据添加成功')
        }
      } catch (error) {
        console.error('数据添加失败:', error)
      }
    },
    async deleteService (index) {
      if (this.isAllLocked) return
      try {
        this.services.splice(index, 1)
        // 检查是否有数据需要上传到后端
        const deletedService = this.originalServices.find(service => service.id === this.services[index].id)
        if (deletedService) {
          await deleteService(deletedService.id)
          console.log('数据删除成功')
        }
      } catch (error) {
        console.error('数据删除失败:', error)
      }
    },
    handleDelete (index, row) {
      if (this.isAllLocked) return
      this.$confirm({
        title: '是否要删除该服务？',
        onOk () {
          this.deleteService(index)
        },
        onCancel () {
          console.log('取消删除')
        }
      })
    },
    toggleLockAll () {
      this.isAllLocked = !this.isAllLocked
      this.services.forEach(service => {
        service.locked = this.isAllLocked
      })
    },
    closeDialog () {
      this.editDialogVisible = false
    },
    batchAddServices () {
      this.batchAddDialogVisible = true
    },
    handlePreview (file) {
      console.log(file)
    },
    handleRemove (file, fileList) {
      this.fileList = fileList
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    async submitBatchAdd () {
      if (this.isAllLocked) return
      try {
        const files = this.fileList.map(file => file.raw)
        const services = files.map(file => {
          const reader = new FileReader()
          reader.onload = (e) => {
            const service = JSON.parse(e.target.result)
            return service
          }
          reader.readAsText(file)
        })
        const parsedServices = await Promise.all(services)
        this.services = this.services.concat(parsedServices)
        this.originalServices = this.services.map(service => ({ ...service })) // 更新原始数据
        console.log('批量添加成功')
        this.batchAddDialogVisible = false
      } catch (error) {
        console.error('批量添加失败:', error)
      }
    }
  }
}
</script>

<style>
.locked-row {
  background-color: #f0f9eb;
}
</style>

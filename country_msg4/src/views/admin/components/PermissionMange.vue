<template>
  <div>
    <el-input v-model="searchUsername" placeholder="输入用户名"></el-input>
    <el-button @click="searchPermissions">查询权限</el-button>
    <el-button @click="showAddUserDialog">添加用户</el-button>
    <el-dialog :visible.sync="isAddUserDialogVisible" title="添加用户">
      <el-form ref="addUserForm" :model="addUserForm">
        <el-form-item label="用户名">
          <el-input v-model="addUserForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-select v-model="addUserForm.permission" placeholder="选择权限">
            <el-option label="观察者" value="observer"></el-option>
            <el-option label="管理者" value="manager"></el-option>
            <el-option label="股东" value="shareholder"></el-option>
            <el-option label="无权限者" value="none"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isAddUserDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addUser">确认添加</el-button>
      </span>
    </el-dialog>
    <el-table :data="filteredPermissions" :pagination="{ pageSize: 10 }">
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="permission" label="权限">
        <template slot-scope="scope">
          <el-select v-model="scope.row.permission" placeholder="选择权限">
            <el-option label="观察者" value="observer"></el-option>
            <el-option label="管理者" value="manager"></el-option>
            <el-option label="股东" value="shareholder"></el-option>
            <el-option label="无权限者" value="none"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="savePermission(scope.row)">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchPermissionsForUser, updatePermission } from '@/api/permissions'
import { MessageBox, Message, Alert } from 'element-ui'

export default {
  data () {
    return {
      username: '',
      searchUsername: '',
      permissions: [],
      filteredPermissions: [],
      isAddUserDialogVisible: false,
      addUserForm: {
        username: '',
        permission: ''
      }
    }
  },
  created () {
    this.initialFetchPermissions() // 在组件创建时就加载数据
  },
  methods: {
    async initialFetchPermissions () {
      try {
        this.permissions = await fetchPermissionsForUser(this.username)
        this.filteredPermissions = this.permissions
      } catch (error) {
        console.error('权限数据获取失败:', error)
      }
    },
    searchPermissions () {
      this.filteredPermissions = this.permissions.filter(p => p.username.includes(this.searchUsername))
    },
    async savePermission (permissionData) {
      try {
        await updatePermission(permissionData.id, permissionData.permission)
        this.initialFetchPermissions() // 重新获取最新的权限列表
        Alert('权限保存成功', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
      } catch (error) {
        console.error('保存权限失败:', error)
        Alert('保存权限失败', '操作失败', {
          confirmButtonText: '确定',
          type: 'error'
        })
      }
    },
    showAddUserDialog () {
      this.isAddUserDialogVisible = true
    },
    async addUser () {
      // 这里应该有添加用户的 API 调用
      console.log('添加用户:', this.addUserForm)
      this.isAddUserDialogVisible = false
      this.initialFetchPermissions() // 更新权限列表
    }
  }
}
</script>

<style>
/* 样式保持简洁 */
.el-table {
  width: 100%;
}
</style>

<template>
  <div class="contact">
    <h1>联系我们</h1>
    <el-form :model="form" ref="form" label-width="100px" @submit.prevent="submitForm">
      <el-form-item label="姓名" prop="name" required>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件" prop="email" required>
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="投诉内容" prop="message" required>
        <el-input type="textarea" v-model="form.message"></el-input>
      </el-form-item>
      <el-form-item label="附件" prop="attachment">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="form.attachment"
          :accept="'.jpg, .png'"
          :on-success="handleSuccess">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div v-if="form.attachment.length > 0">
          <p>已上传的文件:</p>
          <ul>
            <li v-for="file in form.attachment" :key="file.name">{{ file.name }}</li>
          </ul>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">发送</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Contact', // 组件名称
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        attachment: [] // 附件列表
      }
    }
  },
  methods: {
    submitForm () {
      // 处理表单提交逻辑
      console.log('表单提交:', this.form)
      // 这里可以添加发送请求的逻辑
    },
    handlePreview (file) {
      console.log('预览文件:', file)
    },
    handleRemove (file, fileList) {
      console.log('移除文件:', file, fileList)
      // 更新form.attachment以保持显示已上传的文件名
      this.form.attachment = fileList.map(file => ({
        name: file.name,
        url: file.url
      }))
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    handleSuccess (response, file, fileList) {
      file.name = response.name
      // 保持显示上传文件名
      this.form.attachment = fileList.map(file => ({
        name: file.name,
        url: file.url
      }))
    }
  }
}
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
}

.contact h1 {
  text-align: center;
}

.contact .el-form-item {
  margin-bottom: 15px;
}

.contact .el-input,
.contact .el-textarea {
  width: 100%;
  padding: 10px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
}

.contact .el-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact .el-button:hover {
  background-color: #0056b3;
}
</style>

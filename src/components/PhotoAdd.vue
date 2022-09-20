<template>
  <div class="photo">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="photoName">
        <el-input v-model="ruleForm.photoName"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="introduction">
        <el-input v-model="ruleForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="排序序号" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'PhotoAdd',
  data() {
    return {
      ruleForm: {
        photoName: '',
        introduction: '',
        id: ''
      },
      rules: {
        photoName: [
          {required: true, message: '请输入相册名', trigger: 'blur'},
          {min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur'}
        ],
        introduction: [
          {required: true, message: '请输入简介', trigger: 'blur'},
          {min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur'}
        ],
        id: []
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('add!!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.photo {
  width: 600px;
  height: 250px;
  background: rgba(156, 128, 28, 0.10);
  margin: 50px auto;
  padding: 30px 60px;
}
</style>
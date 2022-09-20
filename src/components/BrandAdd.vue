<template>
  <div id="BrandAdd">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="拼音" prop="Pinyin">
        <el-input v-model="ruleForm.Pinyin"></el-input>
      </el-form-item>
      <el-form-item label="LOGO" prop="logo">
        <el-input v-model="ruleForm.logo"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="introduction">
        <el-input v-model="ruleForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="关键词列表" prop="keyword">
        <el-input v-model="ruleForm.keyword"></el-input>
      </el-form-item>
      <el-form-item label="排序序号" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="是否启用" prop="enable">
        <el-switch active-color="green" v-model="ruleForm.enable"></el-switch>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "BrandAdd",
  data() {
    return {
      ruleForm: {
        name: '',
        Pinyin: '',
        logo: '',
        introduction: '',
        keyword: '',
        id: '',
        enable: false,
      },
      rules: {
        name: [
          {required: true, message: '请输入品牌名称', trigger: 'blur'},
          {min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur'}
        ],
        Pinyin: [
          {required: true, message: '请输入拼音', trigger: 'blur'},
          {min: 3, max: 21, message: '长度在 3 到 21 个字符', trigger: 'blur'}
        ],
        introduction: [
          {required: true, message: '请输入简介', trigger: 'blur'},
          {min: 3, max: 21, message: '长度在 3 到 21 个字符', trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
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
#BrandAdd {
  width: 600px;
  height: 450px;
  background: rgba(156, 128, 28, 0.10);
  margin: 50px auto;
  padding: 60px 30px;
}

.el-switch {

}
</style>
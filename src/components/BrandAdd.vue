<template>
  <div id="BrandAdd">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/sys-admin' } ">
        <i class="el-icon-s-promotion"></i>后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        添加品牌
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider></el-divider>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="拼音" prop="pinyin">
        <el-input v-model="ruleForm.pinyin"></el-input>
      </el-form-item>
      <el-form-item label="LOGO" prop="logo">
        <el-input v-model="ruleForm.logo"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="description">
        <el-input v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="关键词列表" prop="keywords">
        <el-input v-model="ruleForm.keywords"></el-input>
      </el-form-item>
      <el-form-item label="排序序号" prop="sort">
        <el-input v-model="ruleForm.sort"></el-input>
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
        pinyin: '',
        logo: '',
        description: '',
        keywords: '',
        sort: '',
        enable: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入品牌名称', trigger: 'blur'},
          {min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur'}
        ],
        pinyin: [
          {required: true, message: '请输入拼音', trigger: 'blur'},
          {min: 3, max: 21, message: '长度在 3 到 21 个字符', trigger: 'blur'}
        ],
        description: [
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
          let url = 'http://127.0.0.1:8081/brand/add-new';
          // console.log('url: ' + url);
          // console.log('ruleForm:');
          // console.log(this.ruleForm);

          let formData = this.qs.stringify(this.ruleForm);
          console.log('formData：' + formData);

          this.axios.post(url, formData).then((response) => {
            // console.log('服务器端响应了结果：');
            // console.log(response);
            // console.log(response.data);
            let responseBody = response.data;
            if (responseBody.state == 20000) {
              // console.log('添加相册成功！');
              this.$message({
                message: '添加品牌成功！',
                type: 'success'
              });
              this.resetForm(formName);
            } else {
              // console.log(responseBody.message);
              this.$message.error(responseBody.message);
            }
          });
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
  width: 1200px;
  height: 450px;
  background: rgba(156, 128, 28, 0.10);
  margin: 50px auto;
  padding: 60px 30px;
}

.el-switch {
  float: left;
  margin-top: 10px;
}

</style>
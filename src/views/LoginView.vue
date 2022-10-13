<template>
  <div>
    <div id="login">
      <h1>管理员登录</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: 'root',
        password: '123456'
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur'}
        ],

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
            if (valid) {
              let url = 'http://localhost:8082/admins/login';

              let formData = this.qs.stringify(this.ruleForm);

              this.axios.post(url, formData).then((res) => {
                    // console.log(res.data);
                    if (res.data.state == 20000) {
                      // console.log('登录成功！');
                      this.$message({
                        message: res.data.message,
                        type: 'success'
                      });
                      let jwt = res.data.data;
                      console.log(jwt);
                      localStorage.setItem('jwt', jwt);

                      // let localJwt = localStorage.getItem('jwt');
                      // console.log(localJwt);
                    } else {
                      // console.log('登录失败，用户名错误！');
                      this.$message.error(res.data.message);
                    }
                  }
              );
            } else {
              console.log('error submit!!');
              return false;
            }
          }
      )
      ;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
body {
  background: #eaddad;
}

#login {
  width: 600px;
  height: 400px;
  background: rgba(255, 255, 255, 0.44);
  margin: 50px auto;
  padding: 30px 60px;
}

</style>
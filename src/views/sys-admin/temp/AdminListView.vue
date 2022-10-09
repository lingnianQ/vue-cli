<template>

  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 16px;">
      <el-breadcrumb-item :to="{ path: '/sys-admin' }">
        <i class="el-icon-s-promotion"></i> 后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider></el-divider>

    <el-table :data="adminData" border style="width: 100%">
      <el-table-column type="index" label="ID" align="center" width="40"></el-table-column>
      <el-table-column prop="username" label="用户名" align="center" width="120"></el-table-column>
      <el-table-column prop="nickname" label="昵称" align="center" width="100"></el-table-column>
      <el-table-column prop="phone" label="手机号码" align="center" width="110"></el-table-column>
      <el-table-column prop="email" label="电子邮箱" header-align="center" width="180"></el-table-column>
      <el-table-column prop="description" label="简介" width="200" header-align="center"></el-table-column>
      <el-table-column label="是否启用" align="center" width="80">
        <template slot-scope="scope">
          <el-switch
              v-model="scope.row.enable"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
              inactive-color="#ccc">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="100">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" circle
                     @click="handleEdit(scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" circle
                     @click="openDeleteConfirm(scope.$index,scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>


</template>

<script>
export default {
  name: "AdminListView",
  data() {
    return {
      adminData: []
    }
  },
  methods: {
    openDeleteConfirm(i,admin) {
      let title = '提示';
      let message = '此操作将永久删除【' + admin.name + '】管理员，是否继续？';
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.handleDelete(i, admin);
      }).catch(() => {
      });
    },
    handleEdit(admin) {

    },
    handleDelete(i, admin) {
      let url = 'http://127.0.0.1:8082/admins/delById/' + admin.id;
      this.axios.get(url).then((res) => {
        if (res.data.state == 20000) {
          // console.log(i)
          this.adminData.splice(i, 1)
          this.$message.success('删除成功');
          // location.reload();
        }
      })
    },

    loadAdminList() {
      console.log('loadAdminList ...');
      let url = 'http://localhost:8082/admins';
      console.log('url = ' + url);
      this.axios.post(url).then((response) => {
        let responseBody = response.data;
        this.$message.success(responseBody.message)
        // console.log(responseBody);
        this.adminData = responseBody.data;
      });
    }
  },
  mounted() {
    this.loadAdminList();
  }
}
</script>

<style scoped>

</style>
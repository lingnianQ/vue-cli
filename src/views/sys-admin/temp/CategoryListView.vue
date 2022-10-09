<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 16px;">
      <el-breadcrumb-item :to="{ path: '/sys-category' }">
        <i class="el-icon-s-promotion"></i> 后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item>类别列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider></el-divider>

    <el-table :data="categoryData" border style="width: 100%">
      <el-table-column type="index" label="ID" align="center" width="40"></el-table-column>
      <el-table-column prop="name" label="用户名" align="center" width="120"></el-table-column>
      <el-table-column prop="parentId" label="父类id" align="center" width="100"></el-table-column>
      <el-table-column prop="depth" label="深度" align="center" width="110"></el-table-column>
      <el-table-column prop="keywords" label="关键词" header-align="center" width="180"></el-table-column>
      <el-table-column prop="sort" label="排序序号" width="200" header-align="center"></el-table-column>
      <el-table-column prop="icon" label="图标url" width="200" header-align="center"></el-table-column>
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
  name: "CategoryListView",
  data() {
    return {
      categoryData: []
    }
  },
  methods: {
    openDeleteConfirm(i, category) {
      let title = '提示';
      let message = '此操作将永久删除【' + category.name + '】类别，是否继续？';
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.handleDelete(i, category);
      }).catch(() => {
      });
    },
    handleEdit(category) {

    },
    handleDelete(i, category) {
      let url = 'http://127.0.0.1:8081/category/delById/' + category.id;
      this.axios.get(url).then((res) => {
        if (res.data.state == 20000) {
          // console.log(i)
          this.categoryData.splice(i, 1)
          this.$message.success('删除成功');
          // location.reload();
        }
      })
    },

    loadCategoryList() {
      console.log('loadCategoryList ...');
      let url = 'http://localhost:8081/category';
      console.log('url = ' + url);
      this.axios.post(url).then((response) => {
        let responseBody = response.data;
        this.$message.success(responseBody.message)
        // console.log(responseBody);
        this.categoryData = responseBody.data;
      });
    }
  },
  mounted() {
    this.loadCategoryList();
  }
}
</script>

<style scoped>

</style>
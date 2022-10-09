<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 16px;">
      <el-breadcrumb-item :to="{ path: '/sys-admin' }">
        <i class="el-icon-s-promotion"></i> 后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item>属性模板列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider></el-divider>

    <el-table :data="attributeTemplateData" border style="width: 100%">
      <el-table-column type="index" label="ID" align="center" width="200"></el-table-column>
      <el-table-column prop="name" label="属性模板名称" align="center" width="200"></el-table-column>
      <el-table-column prop="pinyin" label="拼音" align="center" width="200"></el-table-column>
      <el-table-column prop="keywords" label="关键词" align="center" width="200"></el-table-column>
      <el-table-column prop="sort" label="排序序号" header-align="center" width="200"></el-table-column>
      <el-table-column label="操作" align="center" width="200">
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
  name: "AttributeTemplateListView",
  data() {
    return {
      attributeTemplateData: []
    }
  },
  methods: {
    openDeleteConfirm(i,attributeTemplate) {
      let title = '提示';
      let message = '此操作将永久删除【' + attributeTemplate.username + '】属性模板，是否继续？';
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.handleDelete(i, attributeTemplate);
      }).catch(() => {
      });
    },
    handleEdit(attributeTemplates) {

    },
    handleDelete(i, attributeTemplate) {
      let url = 'http://127.0.0.1:8081/attributeTemplates/delById/' + attributeTemplate.id;
      this.axios.get(url).then((res) => {
        if (res.data.state == 20000) {
          // console.log(i)
          this.attributeTemplateData.splice(i, 1)
          this.$message.success('删除成功');
          // location.reload();
        }
      })
    },

    loadAttributeTemplateList() {
      console.log('loadAttributeTemplateList ...');
      let url = 'http://127.0.0.1:8081/attributeTemplates';
      console.log('url = ' + url);
      this.axios.post(url).then((response) => {
        let responseBody = response.data;
        this.$message.success(responseBody.message)
        // console.log(responseBody);
        this.attributeTemplateData = responseBody.data;
      });
    }
  },
  mounted() {
    this.loadAttributeTemplateList();
  }
}
</script>

<style scoped>

</style>
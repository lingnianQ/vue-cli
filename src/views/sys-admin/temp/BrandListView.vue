<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/sys-admin' } ">
        <i class="el-icon-s-promotion"></i>后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        品牌列表
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>

    <el-table
        :data="brandData"
        border
        style="width: 100%">
      <el-table-column
          type="index"
          label="品牌ID"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="品牌名称"
          width="180">
      </el-table-column>
      <el-table-column
          prop="pinyin"
          label="品牌名称的拼音"
          width="180">
      </el-table-column>
      <el-table-column
          prop="logo"
          label="品牌logo的url"
          width="180">
      </el-table-column>
      <el-table-column
          prop="description"
          label="品牌简介"
          width="180">
      </el-table-column>
      <el-table-column
          prop="keywords"
          label="品牌关键词"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sort"
          label="自定义排序序号">
      </el-table-column>
      <el-table-column
          prop="sales"
          label="品牌销量"
          width="180">
      </el-table-column>
      <el-table-column
          prop="productCount"
          label="商品种类数量总和"
          width="180">
      </el-table-column>
      <el-table-column
          prop="commentCount"
          label="买家评论数量总和"
          width="180">
      </el-table-column>
      <el-table-column
          prop="positiveCommentCount"
          label="买家好评数量总和"
          width="180">
      </el-table-column>
      <el-table-column
          prop="enable"
          label="是否启用"
          width="180">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" circle
                     @click="handleEdit(scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" circle
                     @click="handleDelete(scope.row)"></el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import axios from "axios";

export default {
  description: "BrandListView",
  data() {
    return {
      brandData: []
    }
  },

  methods: {
    loadAlbumList() {
      console.log("loadBrandList....");
      let url = 'http://127.0.0.1:8081/brand';
      this.axios.post(url).then((res) => {
        console.log(res.data);
        if (res.data.state == 20000) {
          // this.$message.success(res.data.message);
          this.brandData = res.data.data;
        }

      })
    },

    handleEdit(brand) {

    },
    handleDelete(brand) {
      let url = 'http://127.0.0.1:8081/brand/delById/' + brand.id;
      this.axios.get(url).then((res) => {
        if (res.data.state == 20000) {
          this.$message.success('删除成功');
          location.reload();
        }

      })
    },


  },

  mounted() {
    console.log("mounted....");
    this.loadAlbumList();
  },

  created() {
    console.log("created....");
  },

}

</script>


<style scoped>

</style>
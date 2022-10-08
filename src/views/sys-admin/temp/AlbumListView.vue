<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/sys-admin' } ">
        <i class="el-icon-s-promotion"></i>后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        相册列表
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>

    <el-table
        :data="albumData"
        border
        style="width: 100%">
      <el-table-column
          type="index"
          label="ID"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="相册名称"
          width="180">
      </el-table-column>
      <el-table-column
          prop="description"
          label="相册简介"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sort"
          label="自定义排序序号">
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
  description: "AlbumListView",
  data() {
    return {
      albumData: [
        {
          id: '',
          name: '2016-05-02',
          description: '王小虎',
          sort: '上海市普陀区金沙江路 1518 弄'
        },
      ]
    }
  },

  methods: {
    loadAlbumList() {
      console.log("loadAlbumList....");
      let url = 'http://127.0.0.1:8081/albums';
      this.axios.post(url).then((res) => {
        console.log(res.data);
        if (res.data.state == 20000) {
          this.$message.success(res.data.message);
          this.albumData = res.data.data;
        }

      })
    },

    handleEdit(album) {

    },
    handleDelete(album) {

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
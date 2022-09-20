<template>
  <div class="admin">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' } "><i class="el-icon-s-promotion"></i>后台管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加相册</el-breadcrumb-item>
    </el-breadcrumb>
    <PhotoAdd/>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' } "><i class="el-icon-s-promotion"></i>后台管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加品牌</el-breadcrumb-item>
    </el-breadcrumb>
    <BrandAdd/>
  </div>
</template>

<script>
import PhotoAdd from "@/components/PhotoAdd";
import BrandAdd from "@/components/BrandAdd";

export default {
  components: {
    PhotoAdd,
    BrandAdd,
  }

}
</script>

<style scoped>

</style>
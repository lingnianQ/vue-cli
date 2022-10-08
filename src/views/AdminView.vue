<template>
  <!--  测试admin-->
  <div class="admin">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' } "><i class="el-icon-s-promotion"></i>后台管理</el-breadcrumb-item>
      <el-breadcrumb-item>
        <el-button @click="test(1)">添加相册</el-button>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="name==1">
      <PhotoAdd/>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' } "><i class="el-icon-s-promotion"></i>后台管理</el-breadcrumb-item>
      <el-breadcrumb-item>
        <el-button @click="test(2)">添加品牌</el-button>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="name==2">
      <BrandAdd/>
    </div>
  </div>
</template>

<script>
import PhotoAdd from "@/components/PhotoAdd";
import BrandAdd from "@/components/BrandAdd";

export default {
  components: {
    PhotoAdd,
    BrandAdd,
  },
  data() {
    return {
      name: ''
    };
  },
  methods: {
    test(i) {
      this.name = i;
    }
  }

}
</script>

<style scoped>

</style>
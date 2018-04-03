<template>
  <div class="Read">
    <el-card class="Read-el-card">
      <ArticleInfo></ArticleInfo>
    </el-card>
  </div>
</template>

<script>
  import ArticleInfo from './../components/ArticleInfo'
  export default {
    name: "Read",
    components: {
      ArticleInfo
    },
    data() {
      return {};
    }
  };

</script>

<style>
  .Read {
    position: absolute;
    background-color: #ededef;
    width: 100%;
    min-height: 100%;
    height: auto;
    z-index: -1;
  }

  .Read-el-card {
    width: 1200px;
    margin: auto;
    margin-top: 20px;
  }

</style>


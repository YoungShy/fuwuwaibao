<template>
  <div class="Notes">
    <el-container>
      <el-header></el-header>
      <el-main class="Notes-el-main">
        <el-card class="Notes-recommend">
          <div slot="header">
            <b>推荐批注</b>
          </div>
        </el-card>
        <br>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Notes",
    components: {},
    data() {
      return {};
    }
  };

</script>

<style>
  .Notes {
    position: absolute;
    background-color: #ededef;
    width: 100%;
    min-height: 100%;
    height: auto;
    z-index: -1;
  }
  .Notes-el-main {
    width: 1200px;
    margin: auto;
  }

</style>


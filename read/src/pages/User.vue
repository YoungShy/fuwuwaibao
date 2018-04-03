<template>
<div class="User">
  <el-container class="User-el-container">
    <el-header width="1200px" height="220px" class="User-el-header">
      <el-card>
        <el-container>
          <el-aside width="200px">
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </el-aside>
        <el-main>
          <h3>{{name}}</h3>
        </el-main>
        <el-aside>
        <el-button type="primary" plain class="User-info">编辑个人信息</el-button>
        </el-aside>
        </el-container>
      </el-card>
    </el-header>
    <el-container>
      <el-main width="800px" class="User-el-main">
        <el-card>
          <el-tabs>
            <el-tab-pane label="动态" name="first">动态</el-tab-pane>
            <el-tab-pane label="文章" name="second">文章</el-tab-pane>
            <el-tab-pane label="批注" name="third">批注</el-tab-pane>
            <el-tab-pane label="推荐" name="fourth">推荐</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-main>
      <el-aside width="380px" class="User-el-aside">
        <el-card>
          <div slot="header">
            <span>个人成就</span>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </el-container>
  </div>
</template>




<script>
  export default {
    name: "User",
    data() {
      return {
        imageUrl: "",
        name: this.$store.state.name
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === "image/jpeg";
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error("上传头像图片只能是 JPG 格式!");
        }
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
      }
    }
  };

</script>
<style>
  .User{
  position: absolute;
  background-color: #ededef;
  width: 100%;
  min-height: 100%;
  height: auto;
  z-index: -1;
}
  .User-el-container {
    width: 1200px;
    margin: auto;
    height: auto;
  }

  .User-el-header {
    margin: 10px 0;
    padding: 20px;
  }

  .User-el-aside {
    margin: 10px 0;
    padding: 20px;
    height: auto;
  }

  .User-el-main {
    margin: 10px 0;
    padding: 20px;
    margin-right: 20px;
    height: auto;
  }
  .User-info{
    margin-top: 100px;
    margin-left: 100px;
  }
  .avatar-uploader .el-upload{
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 160px;
    height: 160px;
    line-height: 160px;
    text-align: center;
  }

  .avatar {
    width: 160px;
    height: 160px;
    display: block;
  }

</style>

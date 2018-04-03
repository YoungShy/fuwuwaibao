<template>
  <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" @select="handleSelect" active-text-color="#ffd04b">
    <el-menu-item index="1">
      主页
    </el-menu-item>
    <el-menu-item index="2">
      书架
    </el-menu-item>
    <el-menu-item v-if="isLogin !== false" index="4" class="right">
      用户中心
    </el-menu-item>
    <el-menu-item v-if="isLogin === false" index="5" class="right">
      登陆
    </el-menu-item>
    <el-menu-item v-if="isLogin === false" index="6" class="right">
      注册
    </el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {user : false};
  },
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    }
  },
  methods: {
    handleSelect: function(key, keypath) {
      if(key == 1)
        this.$router.push({ name: "Home" });
      else if(key ==2)
        this.$router.push({ name: "Bookshelf" });
      else if(key ==3)
        this.$router.push({ name: "Notes" });
      else if(key ==4)
        this.$router.push({ name: "User" });
      else if(key ==5)
        this.$router.push({ name: "SignIn" });
      else if(key ==6)
        this.$router.push({ name: "SignUp" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.right {
  float: right !important;
}
</style>

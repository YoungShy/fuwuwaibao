<template>
  <div class="SignIn">
    <el-card class="ruleForm2">
      <el-form :model="ruleForm2" ref="ruleForm2" class="ruleForm2-el-form">
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="ruleForm2.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: "SignIn",
    data() {
      return {
        ruleForm2: {
          password: "",
          email: ""
        }
      };
    },
    methods: {
      submitForm() {
        let userInfo = {
          email: this.ruleForm2.email,
          password: this.ruleForm2.password,
        };
        //console.log(userInfo);
        this.$store.dispatch('signIn', userInfo).then(()=>{
          this.$router.push({'name':'Home'})
        })
      }
    }
  }

</script>
<style>
  .SignIn {
    position: absolute;
    background-color: #ededef;
    width: 100%;
    min-height: 100%;
    height: auto;
  }

  .ruleForm2 {
    margin: 100px 30%;
    width: 40%;
  }

  .ruleForm2-el-form {
    margin: 10px 50px;
  }

</style>


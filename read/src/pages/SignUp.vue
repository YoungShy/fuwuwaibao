<template>
  <div class="SignUp">
    <el-card class="ruleForm1">
      <el-form :model="ruleForm1" status-icon :rules="rules2" ref="ruleForm1" class="ruleForm1-el-form">
        <el-form-item prop="email" label="邮箱" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]">
          <el-input v-model="ruleForm1.email"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name" :rules="[
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { type: 'string', message: '请输入正确的姓名', trigger: 'blur,change' }
    ]">
          <el-input v-model="ruleForm1.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="学校" prop="school" :rules="[
      { required: true, message: '请输入学校', trigger: 'blur' }
    ]">
          <el-input v-model="ruleForm1.school" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="学号/工号" prop="id" :rules="[
      { required: true, message: '请输入学号/工号', trigger: 'blur' }
    ]">
          <el-input v-model="ruleForm1.id" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm1.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="ruleForm1.confirmPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否是老师">
          <el-switch v-model="ruleForm1.isTeacher"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
          <el-button @click="resetForm('ruleForm1')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: "SignIn",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else if (value.length < 6) {
          callback(new Error("密码长度应该为6-16"));
        } else {
          if (this.ruleForm1.confirmPassword !== "") {
            this.$refs.ruleForm1.validateField("confirmPassword");
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm1.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      var validateName = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入姓名"));
        } else {
          callback();
        }
      };
      return {
        ruleForm1: {
          password: "",
          confirmPassword: "",
          email: "",
          name: "",
          school: "",
          id: "",
          isTeacher: false
        },
        rules2: {
          password: [{
            validator: validatePass,
            trigger: "blur"
          }],
          confirmPassword: [{
            validator: validatePass2,
            trigger: "blur"
          }],
          name: [{
            validator: validateName,
            trigger: "blur"
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          let userInfo = {
            name: this.ruleForm1.name,
            email: this.ruleForm1.email,
            password: this.ruleForm1.password,
            confirmPassword: this.ruleForm1.confirmPassword,
            isTeacher: this.ruleForm1.isTeacher
          };
          if (valid) {
            this.$store.dispatch('signUp', userInfo).then(() => {
              this.$router.push({
                'name': 'Home'
              })
            })
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };

</script>
<style>
  .SignUp {
    position: absolute;
    background-color: #ededef;
    width: 100%;
    min-height: 100%;
    height: auto;
    z-index: -1;
  }

  .ruleForm1 {
    margin: 100px 25%;
    width: 50%;
  }

  .ruleForm1-el-form {
    padding: 20px 50px;
  }

</style>


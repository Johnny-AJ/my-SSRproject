<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules" class="form">
      <!-- 用户名输入框 -->
      <el-form-item class="form-item" prop="username">
        <el-input v-model="form.username" placeholder="用户名/手机"></el-input>
      </el-form-item>
      <!-- 密码框输入 -->
      <el-form-item class="form-item" prop="password">
        <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <!-- 忘记密码 -->
      <p class="form-text">
        <nuxt-link to="#">忘记密码</nuxt-link>
      </p>
      <!-- 登录按钮 -->
      <el-button class="submit" type="warning" @click="hangleLoginSubmit">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { async } from "q";
export default {
  data() {
    return {
      form: {
        username: "13800138000",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ]
      }
    };
  },
  //方法
  methods: {
    hangleLoginSubmit() {
      // console.log(this.form)
      async;
      // 对表单验证判断
      this.$refs.form.validate(valid => {
        // validate--对整个表单进行校验的方法。若不传入回调函数，则会返回一个 promise
        if (valid) {
          console.log(this.form);
          this.$axios({
            url: "/accounts/login",
            method: "post",
            data: this.form
          })
            .then(res => {
              this.$message.success("登录成功");
              console.log(res);
              this.$store.commit('user/setUserInfo',res.data)
            })
            .catch(err => {
              this.$message.error("登录失败");
            });
        } else {
          this.$message.warning("填写相关内容");
          console.log("验证失败");
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.form {
  padding: 25px;
}
.form-item {
  margin-bottom: 20px;
}
.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}
.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
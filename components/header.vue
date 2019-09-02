<template>
  <div class="header">
    <!-- space-between--周围留有空白 -->
    <el-row type="flex" class="main" justify="space-between">
      <!-- logo -->
      <div class="logo">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
      </div>
      <!-- 菜单栏 -->
      <el-row type="flex" class="navs">
        <!-- 类似--router-link -->
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <!-- 登录跳转 -->
      <div>
        <nuxt-link to="/user/login">登录/注册</nuxt-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.header {
  // width:1000px;
  // margin:0 auto;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px 1px #ddd;
}

.main {
  width: 1000px;
  margin: 0 auto;
}

.logo {
  //   width: 100%;
      padding-top: 8px;
  img {
    width: 156px;
    height: 42px;
  display: block;    
  }
}

.navs {
  flex: 1;
  margin-left: 10px;
  a {
    display: block;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;

    &:hover {
      color: #409eff;
      border-bottom: 5px solid #409eff;
    }
  }
}

.nuxt-link-exact-active {
  background: #409eff;
  color: #000;
  &:hover{
      color:#fff
  }
}
</style>    
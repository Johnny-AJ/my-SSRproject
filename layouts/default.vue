<template>
  <div>
    <!-- 渲染头部组件 -->
    <!-- header -->
    <Header/>
    <!-- 占位符 -->
    <!-- 类似--router-view -->
    <nuxt />
    <!-- footer -->
    <Footer/>
  </div>
</template>

<script>
// 引入头部组件
import Header from '@/components/header.vue'
// 引入脚步组件
import Footer from '@/components/footer.vue'
export default {
  // 注册组件
  components:{
    Header,
    Footer
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*{
  margin: 0;
  padding:0;
}
/* ul初始化 */
ul,li,ol{
  list-style: none;
}
a{
  /* 属性规定添加到文本的修饰。 */
  text-decoration: none;
  color: initial;
}
a:hover{
  /* 设置文本颜色 */
  color: initial;
}
em,i{
  /* 修饰的内容都是用斜体字来显示 */
  font-style: normal;
}
</style>

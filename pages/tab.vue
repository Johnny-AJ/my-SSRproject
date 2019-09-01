<template>
  <div style="padding:50px,margin-bottom:20px">
    <div class="tab">
        <span 
        v-for="(item,index) in ['新闻','体育','娱乐']" :key="index" 
        @mousemove="ontab(index)"
        :class="{active:current===index}"
        >{{item}}</span>
    </div>

    <div v-show="current === 0">
      <ul>
        <li>中秋将至</li>
        <li>中秋将至</li>
        <li>中秋将至</li>
      </ul>
    </div>

    <div v-show="current === 1">
      <ul>
        <li>中国男篮</li>
        <li>中国男篮</li>
        <li>中国男篮</li>
      </ul>
    </div>

    <div v-show="current === 2">
      <ul>
        <li>吴亦凡谈恋爱</li>
        <li>吴亦凡谈恋爱</li>
        <li>吴亦凡谈恋爱</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            current:0
        }
    },
    // mounted-钩子
    // methods-方法
    methods:{
        // 点击事件
        ontab(index){
            // 效果返回值
            this.current = index
        }
    }
}
</script>

<style lang='less' scoped>
.tab{
    margin-bottom: 35px;
    span{
        // 鼠标手
        cursor: pointer;
    }
}
.active{
    color: skyblue;
}
</style>
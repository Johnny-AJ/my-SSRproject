<template>
  <!-- 轮播图组件 -->
  <div class="figures">
    <el-carousel :interval="1000" arrow="always">
      <!-- 每一张图片 -->
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <!-- <h3>{{ item }}</h3> -->
        <!-- 轮播图背景图片 -->
        <div
          class="banner-imgs"
          :style="`
          background:url(${item}) center center no-repeat;
          <!-- 背景图像的尺寸 -->
          <!-- contain--把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。 -->
          <!-- $axios.defaults.baseURl是基准路劲 -->
          <!-- 是获取服务器图片的路劲--console.dir() -->
          background:url(${$axios.defaults.baseURL+item.url}) center center no-repeat;
          background-size: contain contain
         `"
        ></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索框 -->
    <div class="banner-content">
      <!-- tab栏 -->
      <div class="search-bar">
        <el-row type="flex" class="search-tab">
          <span v-for="(item,index) in options" :key="index" @click="handleClick(index)" :class="{active:current === index}">
            <!-- 增加点击路由跳转 -->
            <i>{{item.title}}</i>
          </span>
        </el-row>

        <!-- 搜索框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input :placeholder="options[current].placeholder" />
          <!-- 搜索按钮样式 -->
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图数组
      banners: [
        "http://157.122.54.189:9095/assets/images/th01.jfif",
        "http://157.122.54.189:9095/assets/images/th02.jfif",
        "http://157.122.54.189:9095/assets/images/th03.jfif",
        "http://157.122.54.189:9095/assets/images/th04.jfif"
      ],
      // tab栏数组
      options: [
        {
          title: "攻略",
          placeholder: "搜索城市"
        },
        {
          title: "酒店",
          placeholder: "请输入城市搜索酒店"
        },
        {
          title: "机票",
          placeholder: ""
        }
      ],
      // 当前选中索引
      current: 0
    };
  },
  // 方法
  methods: {
    // 当前点击的tab栏时触发
    handleClick(index) {
      // 增加多个判断
      // 如果点击选中2,发生路由跳转
      if(index === 2){
        this.$router.push('/air')
      }
      // 选中索引赋值给到被选中的对象
      // 点击触发选中的索引赋值给current
      this.current = index;
    }
  },
  // 钩子
  mounted() {
    this.$axios({
      url: "scenics/banners"
    }).then(res => {
      // console.log(res)
      const data = res.data.data;
      // 获取了信息,并返回给banners
      this.banners = data;
    });
    // 可以获取基准路劲
    // console.dir(this.$axios)
    // console.log(this.$store.state)
  }
};
</script>

<style lang='less'scoped>
.figures {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;
}
// 在scoped中药修改第三方组件,需要加上 /deep/
/deep/ .el-carousel__container {
  height: 700px;
}
.banner-imgs {
  width: 100%;
  height: 100%;
}
.banner-content {
  z-index: 9;
  width: 1000px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -500px;
  border-top: 1px transparent solid;

  .search-bar {
    width: 552px;
    margin: 0 auto;
  }

  .search-tab {
    .active {
      i {
        color: skyblue;
      }
      &::after {
        background: #eee;
      }
    }
    span {
      width: 82px;
      height: 36px;
      display: block;
      margin-right: 8px;
      position: relative;
      cursor: pointer;

      i {
        position: absolute;
        z-index: 2;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 30px;
        text-align: center;
        color: #fff;
      }
      &:after {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        border: 1px rgba(255, 255, 255, 0.2) solid;
        border-bottom: none;
        transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
        transform-origin: bottom left;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 1px 2px 0 0;
        box-sizing: border-box;
      }
    }
  }
  .search-input {
    width: 550px;
    height: 46px;
    background: #fff;
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    border-top: none;
    box-sizing: unset;

    input {
      flex: 1;
      height: 20px;
      padding: 13px 15px;
      outline: none;
      border: 0;
      font-size: 19px;
    }

    .el-icon-search {
      cursor: pointer;
      font-size: 24px;
      padding: 0 10px;
      font-weight: bold;
    }
  }
}
</style>
<!--
使用vw和vh做单位可以全屏，另一种方法是设置html宽度和高度为100%
el-container el-aside el-header el-footer
--->
<template>
  <el-container class="container">
    <el-header class="header">
      <painter-header></painter-header>
    </el-header>
    <el-container ref="meddle">
      <el-aside class="aside" ref="aside" :width="asideWidth">
        <painter-aside></painter-aside>
        <div id="aside-switch" @click="switchAside">|</div>
      </el-aside>
      <el-container>
        <el-main class="main">
          <div class="main-container">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer class="footer" height="1.2em">
          <painter-footer></painter-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import painterFooter from "@/components/footer";
import painterAside from "@/components/aside"
import painterHeader from "@/components/header"
export default {
  name: 'layout',
  components: {
    painterHeader,
    painterFooter,
    painterAside,
  },
  props: {
    msg: String
  },
  data: function(){
    return{
      asideSwitch : false,
    }
  },
  methods:{
    switchAside(){
      this.asideSwitch = !this.asideSwitch;
    }
  },
  //learn: 计算属性
  computed:{
    asideWidth:function(){
      return this.asideSwitch?"20vw":"2em"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    height: 100vh;
  }
  .header{
    padding: 0;
  }
  .main {
    padding: 0;
    background-color: #fafafa;
  }

  .main-container{
    background-color: transparent;
    max-width: 1024px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .aside{
    position: relative;
  }

  .footer{
    padding: 0;
  }

  /*learn: position 相对于上一个非static的祖先元素*/
  /*learn: z-index 越大越靠近用户*/
  #aside-switch{
    position: absolute;
    width: 20px;
    height: 60px;
    top: 49%;
    right: -10px;
    z-index: 1;
    color: #f0f0f0;
  }

  /*learn: 伪类hover cursor设置鼠标指针形状*/
  #aside-switch:hover{
    cursor:pointer;
    color: #3399ff;
  }

</style>

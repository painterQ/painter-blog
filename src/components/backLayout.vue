<!--
使用vw和vh做单位可以全屏，另一种方法是设置html宽度和高度为100%
el-container el-aside el-header el-footer
--->
<template>
  <el-container class="container">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="aside" width="20vw">
        <painter-aside></painter-aside>
      </el-aside>
      <el-container>
        <el-main class="main">
          <div class="main-container">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer class="footer">
          <painter-footer></painter-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import painterFooter from "@/components/footer";
import painterAside from "@/components/aside"
export default {
  name: 'layout',
  components: {
    painterFooter,
    painterAside,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    height: 100vh;
  }
  .header{
    background-color: #33CCCC;
  }
  .main {
    padding: 0;
  }

  .main-container{
    background-color: transparent;
    max-width: 1024px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .aside{
    background-color: #009999;
  }
  .footer{
    background-color: #5CCCCC;
  }


</style>

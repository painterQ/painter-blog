<!--
使用vw和vh做单位可以全屏，另一种方法是设置html宽度和高度为100%
el-container el-aside el-header el-footer
--->
<template>
  <el-container class="container">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="aside" width="20vw">
        <router-link to="/home">HOME</router-link>
        <router-link to="/second">SECOND</router-link>
      </el-aside>
      <el-container>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'layout',
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
    background-color: #006363;
  }
  .aside{
    background-color: #009999;
  }
  .footer{
    background-color: #5CCCCC;
  }
</style>

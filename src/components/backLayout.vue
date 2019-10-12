<template>
  <el-container class="container">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="aside" width="20vw">Aside</el-aside>
      <el-container>
        <el-main class="main">Main</el-main>
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

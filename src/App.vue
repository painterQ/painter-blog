<!--
导入一个组件：import导入，然后在放到component中,然后就可以使用相应的标签了
选项对象：
  例如：
  {
    name: 'todoList',
    layout: '<template>一个todoList组件</template>'，
    data: {
      ... data被绑定到vue实例，并加入到响应式系统
    },
    props: {
      ...
    }
  }
使用Vue.component可以注册一个新的组件，传入一个组件名称和选项对象
组件的data必须是函数，用来保证是复用的
组件必须注册，使用Vue.component是全局注册，全局注册之后，任何通过new Vue创建的Vue实例都可以使用该组件。但是注册必须在new Vue之前。
组件的命名，字母全小写且必须包含一个连字符
--->

<template>
  <layout msg="Welcome to Your Vue.js App"/>
</template>

<script>
import layout from './components/backLayout.vue'

export default {
  name: 'app',
  components: {
    layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 body{
   margin: 0;
 }
</style>

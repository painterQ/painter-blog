<!--
使用vw和vh做单位可以全屏，另一种方法是设置html宽度和高度为100%
el-container el-aside el-header el-footer
--->
<template>
    <div>
        <index-header class="index-layout-header"></index-header>
        <main class="index-layout-main">
            <index-body></index-body>
        </main>
    </div>
</template>

<script>
    import indexBody from "../components/indexBody"
    import indexHeader from "../components/indexHeader"

    export default {
        name: 'layout',
        components: {
            indexHeader,
            indexBody,
        },
        props: {
            msg: String
        },
        data: function () {
            return {
                asideSwitch: false,
            }
        },

        //learn: 计算属性
        computed: {},
    }
</script>

<style scoped>

    .index-layout-main{
        width: 1024px;
        overflow-y:auto;
        margin: 10px auto;
    }
    /* learn: calc()函数，css3的函数
    attr()，返回选择元素的属性值
    liner-gradient()
    radial-gradient()
    */

    .index-layout-header {
        padding: 0;
        min-height: 40vh;
        width: auto;
        margin: 0 0;
        background-image: url("../../public/background.jpg");
    }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<!--
使用vw和vh做单位可以全屏，另一种方法是设置html宽度和高度为100%
el-container el-aside el-header el-footer
--->
<template>
    <el-container class="container">
        <el-header class="header">
            <painter-header></painter-header>
        </el-header>
        <el-container class="body">
            <!--learn: 设置为auto，设置了overflow，便可以由包裹性，由内部决定--->
            <el-aside class="aside" ref="aside" width="auto">
                <painter-aside></painter-aside>
            </el-aside>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import painterAside from "@/components/aside"
    import painterHeader from "@/components/header"
    import message from "./message";

    export default {
        name: 'layout',
        components: {
            painterHeader,
            painterAside,
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
        mounted() {
            message(this,"登陆弹框",'warning');
            const h = this.$createElement;
            //MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt
            this.$messageBox({
                title: '登录',
                message: h('form', {style: 'color: teal;display:block;margin:auto; width: 20em', type: 'text'}, [
                    h('div', {style: 'margin:10px auto; width: 15em'}, [
                        h('span', null, '邮箱'),
                        h('input', {style: 'color: teal', type: 'text'}, '邮箱'),
                    ]),
                    h('div', {style: 'margin:auto; width: 15em'}, [
                        h('span', null, '密码'),
                        h('input', {style: 'color: teal', type: 'text'}, '密码')
                    ]),

                ]),
                showCancelButton: false,
                closeOnClickModal: false,
                showConfirmButton: false,
                showClose:false,
            }).then(action => {
                this.$message({
                    type: 'info',
                    message: 'action: ' + action
                });
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*
    learn: 关于包裹性
    如果不设置height和wight的话，block的高度是内部决定的，宽度是尽量充满
    如果指定width，百分比和长度，就会固定宽度，这时候设置margin可以水平居中
    如果指定max-width，那么...

    块格式化上下文 BFC 脱离了文档流的独立块区域
    比如浮动的元素，float不是none；由绝对定位的元素，position是absolute或者fix；
    inline-block，table-cell，flex，table-acption，inline-flex
    overflow的值不是visible
    BFC中，除了flex，都有包裹性

    overflow，规定当内部溢出的时候怎么办，默认是visible
    hidden，裁剪；scroll，滚动条；auto 必要时滚动条；
    overflow-x, 多了no-display和no-content
    overflow是大小不够了才会触发，够的时候不会,够的时候只会收缩包裹
    */
    .container {
        height: 100vh;
        overflow: hidden;
    }

    /* learn: calc()函数，css3的函数
    attr()，返回选择元素的属性值
    liner-gradient()
    radial-gradient()
    */
    .body {
        height: calc(100vh - 50px);
        overflow: hidden;
    }

    .header {
        padding: 0;
        height: 50px;
    }

    .main {
        padding: 0;
        background-color: #fafafa;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;

    }

    .aside {
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
    }

</style>

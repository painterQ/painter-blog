<template>
    <el-menu
            default-active="1"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff">
        <!--active-text-color="#ffd04b" 加在css中是不管用的--->
        <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">写文章</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">管理</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-location"></i>
            <span slot="title">消息</span>
        </el-menu-item>
    </el-menu>

</template>


<script>
    import Vue from 'vue'
    import {Menu, Submenu, MenuItemGroup, MenuItem} from "element-ui";

    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
    Vue.use(Submenu);
    export default {
        name: 'painter-aside',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(index, indexPath) {
                try {
                    let replace = this.$router.history.getCurrentLocation() === "/404"
                    switch (index) {
                        case "1":
                            replace ?
                                this.$router.replace('/home') :
                                this.$router.push('/home');
                            return;
                        case "2":
                            /*learn: 向 history 栈添加一个新的记录*/
                            /*当用户点击浏览器后退按钮时，则回到之前的 URL*/
                            replace ?
                                this.$router.replace('/document') :
                                this.$router.push('/document');
                            return;
                        case "3":
                            replace ?
                                this.$router.replace('/manage') :
                                this.$router.push('/manage');
                            return;
                        default:
                            console.log(index, indexPath);
                            break;
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style scoped>
    /*router-link的路由匹配成功后自动添加下面的CSS Class*/
    .router-link-active {

    }

    .el-menu-vertical {
        height: 100%;
    }
</style>
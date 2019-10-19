<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#009999"
            text-color="#fff"
            active-text-color="#ffd04b">
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
    import {Menu,Submenu,MenuItemGroup,MenuItem} from "element-ui";
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
            handleSelect(index,indexPath){
                if (index === "2"){
                    /*向 history 栈添加一个新的记录*/
                    /*当用户点击浏览器后退按钮时，则回到之前的 URL*/
                    this.$router.push('/document').catch(err => {void err});
                    return
                }
                if (index === "1"){
                    this.$router.push('/home').catch(err => {void err});
                    return;
                }
                console.log(index,indexPath)
            }
        }
    }
</script>

<style scoped>
    /*router-link的路由匹配成功后自动添加下面的CSS Class*/
    .router-link-active{

    }
    .el-menu-vertical-demo{
       height: 100%;
    }
</style>
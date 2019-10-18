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
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>设置</span>
            </template>
            <el-menu-item-group>
                <template slot="title">设置</template>
                <el-menu-item index="1-1">设置</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">写文章</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">管理</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-location"></i>
            <span slot="title">导航四</span>
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
                    this.$router.push('/second')
                    return
                }
                if (index === "1"){
                    this.$router.push('/')
                    return;
                }
                console.log(index,indexPath)
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo{
       height: 100%;
    }
</style>
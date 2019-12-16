<template>
    <div>
        <div class="index-header-bar">
            <img class="index-header-logo" src="../../public/avatar.jpeg"/>
            <span class="index-header-text">关于我</span>
            <span class="index-header-text">标签</span>
            <span class="index-header-text">目录</span>
        </div>
        <div class="index-header-title-all">
            <h1 class="index-header-title">乔沛杨</h1>
            <span class="index-header-subtitle">个人博客</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index-header"
    }
</script>

<style scoped>
    .index-header-bar, .index-header-title-all{
        color: #fff;
    }
    .index-header-bar{
        width: 100%;
        padding: 20px;
    }
    .index-header-text{
        margin-right: 22px;
        padding: 0 10px 2px;
        float: right;
    }
    .index-header-logo{
        width: 40px;
        height: 40px;
        margin-right: 22px;
        padding: 0 2px 10px;
    }
    .index-header-title-all{
        text-align: center;
        padding: 0 0 2em 0;
    }
    .index-header-title{
        font-size: 2em;
        margin: 0 0 10px 0;
    }
    .index-header-subtitle{
        font-size: 0.5em;
        display: block;
        margin: 0;
    }
</style>
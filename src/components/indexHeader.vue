<template>
    <div>
        <div class="index-header-bar">
            <img class="index-header-logo" src="../../public/avatar.jpeg"/>
            <span class="index-header-text">关于我</span>
            <span class="index-header-text">标签</span>
            <span class="index-header-text">目录</span>
        </div>
        <div  class="index-header-title-all">
            <div class="index-header-title-center">
                <div class="tags"><i>标签</i></div>
                <h1 class="index-header-title">乔沛杨</h1>
                <h2 class="index-header-subtitle">个人博客</h2>
                <span class="meta">post by 乔</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index-header"
    }
</script>

<style scoped>
    .index-header-title-center{
        margin: 2em auto;
        width: 1024px;
    }
    .tags > a {
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, .8);
        border-radius: 999em;
        padding: 0 10px;
        color: #fff;
        line-height: 24px;
        font-size: 12px;
        text-decoration: none;
        margin: 0 1px 6px 1px;
    }
    .meta{
        font-family: 'Lora', 'Times New Roman', serif;
        font-style: italic;
        font-weight: 300;
        font-size: 18px;
    }
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
        padding: 0 0 2em 0;
    }
    .index-header-title{
        font-size: 4em;
        margin: 0 0 10px 0;
    }
    .index-header-subtitle{
        font-size: 0.5em;
        display: block;
        margin: 0;
    }
</style>
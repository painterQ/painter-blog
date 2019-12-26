<template>
    <div class="index-layout-header">
        <div class="index-header-bar" v-if="this.showBar">
            <img class="index-header-logo" src="../../public/avatar.jpeg"/>
                <router-link :to="'/doc' + this.$store.state.currentID">关于我</router-link>
                <router-link to="/list">标签</router-link>
                <router-link to="/list">目录</router-link>
        </div>
        <div  class="index-header-title-all">
            <div class="index-header-title-center">
                <div class="tags"><i>标签</i></div>
                <h1 class="index-header-title">{{this.$store.state.author.name}}</h1>
                <h2 class="index-header-subtitle">个人博客</h2>
                <span class="meta">post by 乔</span>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../api/rpc'
    import message from "../api/message";
    export default {
        name: "index-header",
        data: function(){
          return{
              lastScroll : 0,
              showBar: true
          }
        },
        methods: {
            menu() {
                let scroll = document.documentElement.scrollTop || document.body.scrollTop;
                this.showBar = scroll <= this.lastScroll || scroll === 0;
                this.lastScroll = scroll
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu, true)
        },
        created() {
            console.log("create header");
            api.getDocsList({start:'/doc10',length: 10}).then(
                data =>{
                    console.log("addDocs",data.data)
                    this.$store.commit('addDocs', data.data)
                }
            ).catch(err=>{message(this,"get list err"+err, "error")});
        }
    }
</script>

<style scoped>
    .index-layout-header, .index-header-bar::before{
        background: url("../../public/background.jpg") bottom / cover fixed;
        color: #fff;
    }

    .index-header-title-center{
        margin: 2em auto;
        width: 1024px;
    }
    .tags > i {
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, .8);
        border-radius: 999em;
        padding: 0 10px;
        color: orange;
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

    .index-header-bar{
        width: 100%;
        position: fixed;
        background: rgba(255, 255, 255, .3);
    }

    .index-header-bar::before{
        position: absolute;
        top: 0; left: 0;right: 0; bottom: 0;
        content: '';
        filter: blur(10px);
        z-index: -1;
    }

    .index-header-bar > *{
        padding: 0 10px 2px;
        margin: 7px;
        float: right;
        text-decoration:none;
        color: #fff;
    }

    /*a .router-link-active{*/
    /*    color: #3399ff;*/
    /*}*/
    .index-header-logo{
        width: 42px;
        height: 42px;
        margin-right: 22px;
        padding: 0 2px 10px;
    }
    .index-header-title-all{
        padding: 4em 0;
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
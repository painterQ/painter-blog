<template>
    <div>
        <el-row class="index-body-all">

            <el-col  :span="18" class="index-body-main">
                <div v-for="(arts, colIndex) in this.$store.state.docs" :key="colIndex" class="index-body-docs-item">
                    <h2 class="art">
                        <span v-if="arts.attr" class="arts-top">[置顶]</span>
                        <span>{{arts.title}}</span>
                    </h2>
                    <p>{{arts.abstract}}</p>
                    <div>Post by 乔沛杨 on {{arts.time}}</div>
                    <hr/>
                </div>
            </el-col>


            <el-col  :span="6" class="index-body-aside">
                <span>aside</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Menu, Submenu, MenuItemGroup, MenuItem} from "element-ui";

    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
    Vue.use(Submenu);
    export default {
        name: 'index-body',
        components:{

        },
        data: function () {
            return {
                isDoc: false,
            }
        },
        created() {
            console.log("create")
            this.$store.commit("getDocs", {start:'/doc10',length: 10});
            this.$store.commit("getDoc");
        }
    }
</script>

<style scoped>
    .index-body-aside{
       padding-left: 15px;
    }
    .index-body-main{
        padding-top: 2em;
    }
    .index-body-docs-item > div{
        font-family: 'Lora', 'Times New Roman',serif;
        color: gray;
        font-style: italic;
        margin: 0 0 1em 0;
    }
    .index-body-docs-item:hover{
        color: #1c6ca1;
        cursor: pointer;
    }
    .index-body-docs-item > p{
        color: #a3a3a3;
        font-size: 0.7em;
        font-style: italic;
    }
    .arts-top{
        color: orangered;
        margin: 0 10px 0 0;
    }
    .art{
        font-size: 1.1em;
        margin: 0 0 10px 0;
    }
</style>
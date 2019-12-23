<template>
    <div>
        <el-row class="index-body-all">
            <el-col  :span="17" class="index-body-main">\
                <!-- learn: 插入HTML-->
                <main v-html='renderDocs'></main>
                <div class="doc-bottom">
                    <h2>推荐文章</h2>
                    <ul>
                        <li>文章一</li>
                        <li>文章二</li>
                    </ul>
                    <hr>
                    <el-button>上一篇</el-button>
                    <el-button style="float:right;">下一篇</el-button>
                    <div class="coffee">赏</div>
                    <div class="share">
                        <a class="el-icon-eleme"></a>
                    </div>
                </div>
            </el-col>
            <el-col  :span="5" class="index-body-aside">
                <strong class="tag-tital"></strong>
                目录一<br>
                目录二
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "index-docs-body",
        data: function () {
            return{
                documentIndex: ""
            }
        },
        computed:{
            renderDocs(){
                let content = this.$store.state.docs[this.$store.state.currentID]
                if (content === null){
                    this.$store.Commit("getDocs", {start:"content.id",length: 1})
                }
                content = this.$store.state.docs[this.$store.state.currentID]

                this.$store.Commit("setCurrent",this.$route.params.docID)
                if(content.content === ''){
                    this.$store.Commit("getDoc", content.id)
                }
                return content.content
            }
        }
    }
</script>

<style scoped>
    .coffee{
        font-size: 28px;
        line-height: 58px;
        position: relative;
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        vertical-align: middle;
        color: #fff;
        border: 1px solid #f1b60e;
        border-radius: 50%;
        background: #fccd60;
        background: linear-gradient(to bottom, #fccd60 0, #fbae12 100%, #2989d8 100%, #207cca 100%);
    }
    .tag-tital{

    }
    .tag-tital:before{
        content: "\f02e";
        margin-right: 0.5em;
    }
    .index-body-main{
        margin: 2em;
    }
    .index-body-aside{
        border-left: rgba(88,88,88,0.1) 1px solid;
        padding: 1em 1em 0 1em;
        margin-left: 1em;
    }
    /*p h1 h2 h3 h4 h5 h6*/
</style>
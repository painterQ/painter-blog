<template>
    <div>
        <el-row class="index-body-all">
            <el-col :span="16" class="index-body-main">
                <!-- learn: 插入HTML-->
                <main id="doc-content" v-html="document"></main>
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
            <el-col :span="5" class="index-body-aside">
<!--                <strong class="tag-tital"></strong>-->
                <!-- 使用外部插件自动生成目录npm i katelog -S-->
                <!-- https://github.com/KELEN/katelog-->
                <div id="doc-cateLog"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from '../api/rpc'
    import message from "../api/message";
    import kateLog from 'katelog';
    export default {
        name: "index-docs-body",
        data: function () {
            return {
                kateLog: null,
                document: "",
            }
        },
        watch:{
            document(newV,oldV){
                console.log("watch",newV,oldV)
                this.kateLog.rebuild();
            },
        },
        mounted() {
            this.kateLog = new kateLog({
                contentEl: 'doc-content',
                catelogEl: 'doc-cateLog',
                // linkClass: 'k-catelog-link',
                // linkActiveClass: 'k-catelog-link-active',
                // supplyTop: 20,
                // selector: ['h2', 'h3'],
                active: null
            });
            /*this.document = `<h1>标题</h1>
                    <p>文章</p>
                    <h2>1.二级标题</h2>
                    <h3>1.1三级标题</h3>
                    <p>文章</p>
                    <h3>1.2三级标题</h3>
                    <p>文章</p>
                    <h2>2.二级标题</h2>
                    <p>文章</p>
                    <h2>3.二级标题</h2>
                    <p>文章</p>`*/
            this.render()
        },
        methods:{
            render(){
                let newV = '/' + this.$route.params.docID;
                message(this,"id:" + newV,'warning');
                if (this.$store.state.docs[newV].content === ""){
                    api.getDoc(newV).then(
                        (data)=>{
                            console.log('data',data)
                            this.$store.commit('updateDoc',newV,data.data.content);
                            this.document = data.data.content
                        }
                    ).catch(
                        err =>{
                            message(this,"获取文章失败"+err,'warning');
                            this.$router.push("/404")
                        }
                    )
                }
                this.document = this.$store.state.docs[newV].content || ""
            }
        },
    }
</script>

<style scoped>
    .coffee {
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

    .tag-tital {

    }

    .tag-tital:before {
        content: "\f02e";
        margin-right: 0.5em;
    }

    .index-body-main {
        margin: 2em;
    }

    .index-body-aside {
        border-left: rgba(88, 88, 88, 0.1) 1px solid;
        padding: 1em 1em 0 1em;
        margin-left: 1em;
    }

    /*p h1 h2 h3 h4 h5 h6*/
    main p{

    }
    main h1{

    }
    main h2{

    }
    main h3{

    }
    main h4, main h5, main h6{

    }
</style>
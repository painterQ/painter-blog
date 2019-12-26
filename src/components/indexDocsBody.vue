<template>
    <div>
        <div class="index-body-all">
            <div class="index-body-aside">
                <!--                <strong class="tag-tital"></strong>-->
                <!-- 使用外部插件自动生成目录npm i katelog -S-->
                <!-- https://github.com/KELEN/katelog-->
                <div id="doc-cateLog" ref="doc-cateLog" ></div>
            </div>
            <div  class="index-body-main">
                <!-- learn: 插入HTML-->
                <main id="doc-content" v-html="document"></main>
            </div>
        </div>
        <div class="doc-bottom">
            <h2>推荐文章</h2>
            <ul>
                <li>文章一</li>
                <li>文章二</li>
            </ul>
            <hr>
            <el-button @click="prevDoc">上一篇</el-button>
            <el-button style="float:right;" @click="nextDoc">下一篇</el-button>
            <div class="coffee">赏</div>
            <div class="share">
                <a class="el-icon-eleme"></a>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../api/rpc'
    import message from "../api/message";
    import kateLogClass from 'katelog';

    export default {
        name: "index-docs-body",
        data: function () {
            return {
                scroll : 0,
                kateLog: null,
                document: "",
                menuFloat: false
            }
        },
        watch: {
            document(nv,ov) {
                console.log("document change, target watch", ov,nv)
                this.$nextTick(() => {
                    this.kateLog.rebuild();
                })
            },
        },
        methods: {
            prevDoc(){
                //仍然在当前组件，所以只是复用，没有重新触发mounted
                this.$router.push("/doc/doc0");
                this.render()
            },
            nextDoc(){
                this.$router.push("/doc/doc3");
                this.render()
            },
            render() {
                let newV = '/' + this.$route.params.docID;
                console.log('change docs', "id:" + newV);
                //todo缓存
                api.getDoc({doc:newV}).then(
                    (data) => {
                        console.log('data', data);
                        this.$store.commit('updateDoc', newV, data.data.content);
                        this.document = data.data
                    }
                ).catch(
                    err => {
                        message(this, "获取文章失败" + err, 'warning');
                        // this.$router.replace("/404")
                    }
                );

            }
        },
        mounted() {
            console.log("doc page mounted ")
            // window.addEventListener('scroll', ()=>{
            //     this.scroll = this.$refs['side-bar'].getBoundingClientRect().top
            // }, true)
            this.kateLog = new kateLogClass({
                contentEl: 'doc-content',
                catelogEl: 'doc-cateLog',
                linkClass: 'k-catelog-link',
                linkActiveClass: 'k-catelog-link-active',
                // supplyTop: 20,
                selector: ['h2', 'h3'],
                active: null
            });
            console.log("doc page render")
            this.render()

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

    .index-body-all{
        display: flex;
        flex-flow: column;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: center;
    }

    .index-body-main {
        margin: 2em;
        min-width: 30em;
        max-width: 45em;
    }

    .index-body-aside {
        border-left: rgba(88, 88, 88, 0.1) 1px solid;
        margin-left: 1em;
    }
    #doc-cateLog{
        position: sticky;
        top: 200px;
    }

    /*p h1 h2 h3 h4 h5 h6*/
    main p {

    }

    main h1 {

    }

    main h2 {

    }

    main h3 {

    }

    main h4, main h5, main h6 {

    }
</style>

<style>
    .k-catelog-link {
        font-size: 0.7em;
        word-break: keep-all;
    }

    #doc-cateLog li {
        display: block;
    }

    .k-catelog-link-active {
        color: red;
    }
</style>
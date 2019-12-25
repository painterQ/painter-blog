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
            <el-col :span="5">
                <!--                <strong class="tag-tital"></strong>-->
                <!-- 使用外部插件自动生成目录npm i katelog -S-->
                <!-- https://github.com/KELEN/katelog-->
                <div ref="side-bar">
                <div id="doc-cateLog" ref="doc-cateLog"></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import kateLogClass from 'katelog';

    export default {
        name: "index-docs-body",
        data: function () {
            return {
                kateLog: null,
                document: "",
                menuFloat : false
            }
        },
        watch: {
            document() {
                this.$nextTick(() => {
                    this.kateLog.rebuild();
                })
            },
        },
        methods:{
            menu() {
                let list = this.$refs['doc-cateLog'].classList;
                let h = this.$refs['side-bar'].getBoundingClientRect().top;
                if ( !this.menuFloat && h < 80 ) {
                    list.remove(["memu_Static"])
                    list.add(["memu_Float"])
                    this.menuFloat = !this.menuFloat
                    console.log("change float")
                }
                if( this.menuFloat && h > 80 ){
                    list.remove(["memu_Float"])
                    list.add(["memu_Static"])
                    this.menuFloat = !this.menuFloat
                    console.log("change static")
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu, true)
            this.kateLog = new kateLogClass({
                contentEl: 'doc-content',
                catelogEl: 'doc-cateLog',
                linkClass: 'k-catelog-link',
                linkActiveClass: 'k-catelog-link-active',
                // supplyTop: 20,
                selector: ['h2', 'h3'],
                active: null
            });
            this.document = `<h1>标题</h1>
                    <p>文章</p>
                    <h2>1.二级标题</h2>
                    <h3>1.1三级标题</h3>
                    <p>文章</p>
                    <h3>1.2三级标题特别长特别长特别长特别长特别长特别长特别长特别长特别长特别长</h3>
                    <p>文章</p>
                    <h2>2.二级标题</h2>
                    <p>文章</p>
                    <h2>3.二级标题</h2>
                    <p>文章</p>`
        }
    }
</script>

<style scoped>
    .memu_Static {
        position: static; top: auto;
    }
    .memu_Float {
        position: sticky; top: 80px;
    }
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
</style>

<style>
    .k-catelog-link {
        font-size: 0.7em;
        word-break: keep-all;
    }

    #doc-cateLog li{
        display: block;
    }

    .k-catelog-link-active {
        color: red;
    }
</style>
<template>
    <div>
        <el-row class="index-body-all">
            <el-col  :span="17" class="index-body-main">
                <!-- learn: 插入HTML-->
                <main v-html='document'></main>
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
    import api from '../api/rpc'
    import message from "../api/message";
    export default {
        name: "index-docs-body",
        data: function () {
            return{
                document: "",
            }
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
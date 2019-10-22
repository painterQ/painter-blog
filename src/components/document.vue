<template>
    <div id="document">
        <el-divider class= "line" content-position="left">撰写文章</el-divider>
        <el-form ref="form" label-width="80px" id="tinymce-editor-form">

            <div class="operation-flex-container">
                <el-button id="release" >发布</el-button>
                <el-button id="save" >保存草稿</el-button>
                <el-button id="delete" >删除</el-button>
                <el-input type="text" placeholder="请输入标题"
                          id="title" maxlength="30" show-word-limit
                          v-model="tital"/>
            </div>
            <el-input type="text" id="path" v-model="path" class="editor-input"
                      placeholder="请输入路径">
                <template slot="prepend">http://www.xixi201314.cn/</template>
                <template slot="append">.html</template>
            </el-input>
            <editor v-model="myValue"
                    :init="init"
                    :disabled="disabled"
                    name="document"
                    @onClick="onClick">
            </editor>
        </el-form>
    </div>
</template>
<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/silver'
    // 编辑器插件plugins
    // 更多插件参考：https://www.tiny.cloud/docs/plugins/
    import 'tinymce/plugins/image'// 插入上传图片插件
    import 'tinymce/plugins/media'// 插入视频插件
    import 'tinymce/plugins/table'// 插入表格插件
    import 'tinymce/plugins/lists'// 列表插件
    import 'tinymce/plugins/wordcount'// 字数统计插件
    export default {
        components: {
            Editor
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
            // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
            baseUrl: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            plugins: {
                type: [String, Array],
                default: 'lists image media table wordcount'
            },
            toolbar: {
                type: [String, Array],
                default: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
            }
        },
        data() {
            return {
                init: {
                    language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`,
                    language: 'zh_CN',
                    skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide`,
                    content_css: `${this.baseUrl}/tinymce/skins/content/default/content.css`,
                    // skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide-dark`, // 暗色系
                    // content_css: `${this.baseUrl}/tinymce/skins/content/dark/content.css`, // 暗色系
                    height: 500,
                    plugins: this.plugins,
                    toolbar: this.toolbar,
                    branding: false,
                    menubar: false,
                    // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                    // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                        success(img)
                    }
                },
                myValue: this.value,
                tital: '',
                path: ''
            }
        },
        mounted() {
            tinymce.init({});
        },
        methods: {
            // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
            // 需要什么事件可以自己增加
            onClick(e) {
                this.$emit('onClick', e, tinymce)
            },
            // 可以添加一些自己的自定义事件，如清空内容
            clear() {
                this.myValue = ''
            }
        },
        watch: {
            value(newValue) {
                this.myValue = newValue
            },
            myValue(newValue) {
                this.$emit('input', newValue)
            }
        }
    }
</script>

<style scoped>
    #document{
        max-width: 1024px;
        margin: 3em auto;
    }
    .operation-flex-container{
        display:-webkit-flex;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .operation-flex-container > button{
        width: 10%;
    }

    .operation-flex-container > div {
        width: 60%;
    }

    #tinymce-editor-form > div {
        margin: 7px 0 0 0;
    }

    .line {
        margin: 2em 0 1em 0;
    }
    .line >*{
        font-size: 1.5em;
        font-size: large;
        background-color: #fafafa;
    }
</style>
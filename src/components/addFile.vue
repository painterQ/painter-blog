<template>
    <div>
        <img alt="Vue logo" src="@/assets/logo.png">
        <editor
                id="tinymce"
                v-model="tinymceHtml"
                :init="editorInit"
        ></editor>
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue'

    export default {
        name: 'app',
        components: {
            'editor': Editor
        },
        methods:{
            editorInit: {
                language_url: '/static/tinymce/zh_CN.js',
                language: 'zh_CN',
                skin_url: '/static/tinymce/skins/lightgray',
                height: 300
            }
        }
    }
</script>
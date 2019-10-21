<template>
    <div class="setting">
        <!--learn: 通过给元素绑定ref=“XXX”，然后通过this.$refs.XXX或者this.refs['XXX']来获取元素-->
        <el-form ref="baseInfoForm" :model="baseInfoForm" label-width="80px">
            <el-divider class= "line" content-position="left">个人信息</el-divider>
            <div id="owner-info">
                <el-avatar
                        class="setting-avatar"
                        shape="square"
                        ref="avatar"
                        src="./avatar.jpeg"
                        :size="200"
                        fit="contain"
                        @error="avatarError"
                ></el-avatar>
                <div>
                    <el-form-item label="个人邮箱">
                        <el-input v-model="baseInfoForm.mail"></el-input>
                        <span>用于发送告警邮件及其它通知, 建议填写, 如: example@163.com.</span>
                    </el-form-item>
                    <el-form-item label="github">
                        <el-input v-model="baseInfoForm.github"></el-input>
                        <span>选择填写, 如: https://github.com/painterQ</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </div>
            </div>
        </el-form>
        <el-form ref="blogInfoForm" :model="blogInfoForm" label-width="80px">
            <el-divider class= "line" content-position="left">博客信息</el-divider>
            <el-form-item label="博客昵称">
                <el-input v-model="blogInfoForm.nickName"></el-input>
                <span>用户昵称可以与用户名不同, 用于前台显示.如果你将此项留空, 将默认使用登录用户名.</span>
            </el-form-item>
            <el-form-item label="博客标题">
                <el-input v-model="blogInfoForm.title"></el-input>
                <span>用于所有页面的title组成, 如: Painter's Blog</span>
            </el-form-item>
            <el-form-item label="座右铭">
                <el-input v-model="blogInfoForm.motto"></el-input>
                <span>简介或格言, 如: 生活百般滋味, 人生需要笑对.</span>
            </el-form-item>
            <el-form-item label="IPC">
                <el-input v-model="blogInfoForm.IPC"></el-input>
                <span>用于底部显示, 不添加则不显示</span>
            </el-form-item>
            <el-form-item label="归档前言">
                <el-input v-model="blogInfoForm.beforeArchive"></el-input>
                <span>此文字用于专题前述, 会在专题最前方显示.</span>
            </el-form-item>
            <el-form-item label="专题前言">
                <el-input v-model="blogInfoForm.beforeTopic"></el-input>
                <span>此文字用于归档前述, 会在归档最前方显示.</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>

        <el-form ref="pwdChangeForm" :model="pwdChangeForm" label-width="80px">
            <el-divider class= "line" content-position="left">密码修改</el-divider>
            <el-form-item label="密码">
                <el-input v-model="pwdChangeForm.pwd"></el-input>
            </el-form-item>
            <el-form-item label="密码确认">
                <el-input v-model="pwdChangeForm.rePWD"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import vue from 'vue'
    import {
        Form, FormItem, Select, Option, OptionGroup,
        Input, Button, Checkbox, CheckboxGroup, Switch,
        Avatar, Divider
    } from 'element-ui'

    vue.use(Form);
    vue.use(FormItem);
    vue.use(Select);
    vue.use(Option);
    vue.use(OptionGroup);
    vue.use(Input);
    vue.use(Button);
    vue.use(CheckboxGroup);
    vue.use(Checkbox);
    vue.use(Avatar);
    vue.use(Switch);
    vue.use(Divider)

    export default {
        name: "painter-setting",
        data() {
            return {
                baseInfoForm: {
                    mail: '',
                    github: '',
                },
                blogInfoForm: {
                    nickName: '',
                    title: '',
                    motto: '',
                    IPC: '',
                    beforeArchive: '',
                    beforeTopic: '',
                },
                pwdChangeForm: {
                    pwd:'',
                    rePWD: '',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            avatarError() {
                this.$refs['avatar'].src = `${this.baseUrl}/avatar.jpeg`
            }
        }
    }
</script>

<style scoped>
    HR {
        background-color: #5CCCCC;
        size: 3px;
        filter: alpha(opacity=100, finishopacity=0, style=3);
        margin: 2em 0;
    }

    #owner-info {
        display: flex;
        flex-wrap: wrap;
    }

    #owner-info > * {
        width: 60%;
    }

    .setting {
        margin: 3em 0;
    }

    .setting-avatar {
        margin: 0 2em 2em 0;
        /*learn: 阴影 水平，垂直，模糊度*/
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    span {
        margin: 1em 1em 0 0;
        color: #999;
    }

    .line {
        margin: 2em 0;
    }
    .line >*{
        font-size: 1.5em;
        font-size: large;
        background-color: #fafafa;;
    }
</style>
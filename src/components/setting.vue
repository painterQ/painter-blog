<template>
    <div>
        <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <HR/>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
        <HR/>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import vue from 'vue'
    import {Form, FormItem, Select, Option,OptionGroup,
        Input, Button,Checkbox,CheckboxGroup,
    Avatar} from 'element-ui'
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
    export default {
        name: "painter-setting",
        data() {
            return {
                form: {
                    // name: '',
                    // region: '',
                    // date1: '',
                    // date2: '',
                    // delivery: false,
                    // type: [],
                    // resource: '',
                    // desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
HR{
    width: 80%;
    background-color: #5CCCCC;
    size: 3px;
    filter: alpha(opacity=100,finishopacity=0,style=3);
    margin: 2em 0;
}
</style>
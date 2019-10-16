import Vue from 'vue'
import VueRouter from 'vue-router'
import {Aside, Button, Col, Container, Footer, Header, Main, Row} from "element-ui";
import {Menu,Submenu,MenuItemGroup,MenuItem} from "element-ui";
const routes = [
    {
        path: '/home',
        component: Button
    },
    {
        path: '/second',
        component: Button
    },
    {
        path: '/',
        redirect:'/home'
    }
];


Vue.use(Button);    //针对组件选项对象中的install方法
Vue.use(Row);
Vue.use(Col);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Container);

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);


Vue.use(VueRouter);

const router = new VueRouter({
    "routes":routes // routes(缩写) 相当于 routes: routes
})

export default router
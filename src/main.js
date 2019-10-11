import Vue from 'vue'
import { Button ,Col, Row, Header, Aside,Footer,Main,Container} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './api/login'
import './mock.js'

Vue.config.productionTip = false;


Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Container);

new Vue({
  render: h => h(App),
}).$mount('#app')

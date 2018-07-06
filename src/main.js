// 入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入axios 
import axios from 'axios'
Vue.prototype.$http = axios

//按照需求导入 mint-ui 中的组件
import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入 mui 的组件
import './lib/mui/css/mui.min.css'
//导入 mui 扩展组件
import './lib/mui/css/icons-extra.css'

//定义格式时间的插件
import moment from 'moment'
//定义全局过滤器定义时间
Vue.filter('dataForm',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

//  导入app 跟组件
import App from './App.vue'

// 导入自己的 router .js 路由
import router from './router.js'

new Vue({
    el:"#app",
    render: h =>h(App),
    router, //挂载路由对象
})



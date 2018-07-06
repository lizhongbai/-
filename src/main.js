// 入口文件
import Vue from 'vue'

//导入mint MUI  header 
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入 mui 的组件
import './lib/mui/css/mui.min.css'
//导入 mui 扩展组件
import './lib/mui/css/icons-extra.css'

import App from './App.vue'

new Vue({
    el:"#app",
    render: h =>h(App)
})
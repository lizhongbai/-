import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './componrnts/tabbar/HomeContainer.vue'
import MemberContainer from './componrnts/tabbar/MemberContainer.vue'
import ShopcarContainer from './componrnts/tabbar/ShopcarContainer.vue'
import SearchContainer from './componrnts/tabbar/SearchContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [  //配置路由规则
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
  ],
  linkActiveClass:'mui-active'  //覆盖默认的高亮的路由的类
})

// 把路由对象暴露出去
export default router
import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router' // 引入路由


Vue.use(VueRouter) // vue使用路由
//引入组件

import Login from '../view/login.vue'// 引入home到路由的页面
import Home from '../home.vue'// 引入home到路由的页面
import List from '../view/list.vue'// 引入home到路由的页面
import Detail from '../view/detail.vue'// 引入home到路由的页面




export default new VueRouter({
    routes:[
        {
            path: '/', 
            component:Login
            // component: resolve => require(['@/views/login'], resolve)
        },
        {
            path: '/login', 
            component:Login
            // component: resolve => require(['@/views/login'], resolve)
        },
        {
            path: '/index', 
            component:Home,
            // redirect:'/list',
            children: [
                {
                    path:'/list',
                    component:List,
                },
                {
                    path:'/detail',
                    component:Detail,
                }
            ]
        }
        
    ]
})
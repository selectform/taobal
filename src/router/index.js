import Vue from 'vue'
import Router from 'vue-router'
import Heads from '@/components/heads.vue'; //公共组件/或菜单
import Login from '@/pages/login/login.vue';
import Home from '../pages/home/home.vue';


Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            redirect: '/home', //重定向
            component: Heads,
            children: [{
                path: '/home',
                name: 'home',
                meta: '首页',
                component: Home
            }]
        },
        {
            path: '/login',
            name: 'login',
            meta: '登录',
            component: Login
        }
    ]
})
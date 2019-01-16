import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header.vue';
import Home from '../pages/home.vue';


Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        component: Header,
        redirect: '/home',
        childer: [{
            path: '/home',
            name: 'home',
            meta: '首页',
            component: Home
        }]
    }]
})
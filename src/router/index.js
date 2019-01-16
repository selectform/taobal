import Vue from 'vue'
import Router from 'vue-router'
import Heads from '@/components/heads.vue';
import Home from '../pages/home.vue';


Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/home',
        redirect: '/home',
        component: Heads,
        children: [{
            path: '/home',
            name: 'home',
            component: Home
        }]
    }]
})
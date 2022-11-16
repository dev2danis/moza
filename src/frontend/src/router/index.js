import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/home'
    },{
        path: '/home',
        component: () => import('@/views/Home.vue')
    },{
        path: '/login',
        component: () => import('@/views/login/Login.vue')
    },{
        path: '/login/register',
        component: () => import('@/views/login/Register.vue')
    }]
})

export default router
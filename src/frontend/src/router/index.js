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
        component: () => import('@/components/view/Home.vue')
    },{
        path: '/login',
        component: () => import('@/components/view/Login.vue')
    }]
})

export default router
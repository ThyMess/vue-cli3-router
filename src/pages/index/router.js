import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home/Home.vue'
import vHeader from './views/header/Header.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/vheader',
            component:vHeader
        },
        {
            path:'/shop',
            beforeEnter() {
                window.location='/shop.html'
            },
        },
        {
            path:'/detail',
            beforeEnter() {
                window.location='/detail.html'
            }
        }
    ]
})
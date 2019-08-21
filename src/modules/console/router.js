import Vue from 'vue'
import VueRouter from 'vue-router'

import console from './console'

Vue.use(VueRouter)

const routes = [
    {path:'/',name:'console',component:console,meta:{title:'console 登陆'}}
]

export default new VueRouter({
    routes:routes
})
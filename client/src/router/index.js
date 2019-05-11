import Vue from 'vue'
import Router from 'vue-router'


import Posts from '../components/Posts.vue'

Vue.use(Router)
export default new Router({
    routes: [
        
        
        {path:'/Posts',component:Posts, name :'Posts'},
       
    ]
})

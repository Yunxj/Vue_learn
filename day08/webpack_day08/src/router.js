import VueRouter from 'vue-router'
import accste from './com/accste.vue'
import goods from './com/goods.vue'
import login from './LRuse/login.vue'
import register from './LRuse/register.vue'


let router = new VueRouter({
    routes:[
        {path: '/accste', component: accste},
        {path: '/goods', component: goods,
            children: [
                {path: 'login',component: login},
                {path: 'register', component: register}
            ]
        }
    ]
})

export default router 
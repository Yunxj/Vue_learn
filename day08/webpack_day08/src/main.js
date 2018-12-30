import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入app组件
import app from './app.vue'
//导入路由
import router from './router.js'
//less 文件转换插件要关闭,不然会报错


var vm = new Vue({
    el:'#app',
    data:{
        msg:'哈哈'
    },
    methods:{},
    render: c => c(app), 
    router
})
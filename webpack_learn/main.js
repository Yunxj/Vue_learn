//ES6的新语法
import $ from 'jquery'

import './src/css/index.css'
import './src/css/admin.less'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import login from './src/login.vue'
import zs from './src/text.js'
import {title} from './src/text.js'
console.log(zs.name + '------------' + title);
//less 文件转换插件要关闭,不然会报错

$(function () {  
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function () {  
        return 'blue'
    })
})

// class Person {
//     static info = {name: 'zs' ,age: 20}
// }
// console.log(Person.info);

// var login = {
//     template:'<h2>登录组件</h2>'
// }
var vm = new Vue({
    el:'#app',
    data:{
        msg:'哈哈'
    },
    methods:{},
    // components: {
    //     login
    // }
    // render: function (createElements) {
    //     return createElements(login)
    // }
    render: c => c(login) //login 替换 <div id="app"></div>

})
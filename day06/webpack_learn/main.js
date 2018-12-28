//ES6的新语法
import $ from 'jquery'

import './src/css/index.css'
import './src/css/admin.less'
import 'bootstrap/dist/css/bootstrap.css'
//less 文件转换插件要关闭,不然会报错

$(function () {  
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function () {  
        return 'blue'
    })
})
//配置文件暴露接口
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry:'./main.js', //指定入口 相对路径或绝对路径
    output:{  //不指定,默认./dist
        path: path.join(__dirname,'./dist'),  //指定出口目录,必须是绝对路径
        filename: 'index.js'
    },
    //webpack-dev-server的另一种方式写入参数
    // devServer:{
    //     contentBase:path.join(__dirname,'./src'),
    //     port:3000,
    //     compress: true,
    //     open:true,
    //     hot:true
    // },
    // //添加插件
    plugins:[
        // new webpack.HotModuleReplacementPlugin()
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            //模板 有指定显示指定的,没有指定创建个模板
            //自动添加<script type="text/javascript" src="index.js"></script>
            template:'./src/index.html', //相对路径
            filename:'index.html' //默认路径
        }),
        new VueLoaderPlugin()
    ],
    module:{
        //配置解析style css样式
        rules:[
            {test: /\.css$/, use:['style-loader','css-loader'] },
            {test: /\.less$/, use:['style-loader','css-loader','less-loader'] },
            {test: /\.scss$/, use:['style-loader','css-loader','sass-losder'] },
            {test: /\.(png|jpg|gif|)$/, use:[
                    {   loader:'url-loader',
                        options: {
                            limit:8192
                        }
                    }
                ] 
            },
            { test: /.(eot|svg|ttf|woff|woff2)$/, use: ['url-loader'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
            // { test: /\.vue$/, use: 'vue-loader' }, // 配置 Babel 来转换高级的ES语法
            { test: /\.vue$/,loader: 'vue-loader'} //两个方式都可以 不能同时存在
        ]
    },
    resolve:{
        alias:{
            'vue$': 'vue/dist/vue.js'
        }
    },
    mode:'development', //开发  developer 开发者  programmer 程序员

}
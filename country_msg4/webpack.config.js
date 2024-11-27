const { rules } = require("./.eslintrc");
const path = require('path');

module.exports = {
    // 入口文件
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader']
            },
            {
                test: /\.(jpg|png|svg|ttf|ico)$/, // 添加对 .ico 文件的支持
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // 小于8KB的文件会被转为base64格式
                        name: '[name].[hash:8].[ext]', // 输出文件名格式
                        outputPath: 'images/', // 输出路径
                        publicPath: 'images/' // 公共路径
                    }
                }
            }
        ]
    },
    Plugins: [
        new VueLoaderPlugin()
    ]
}
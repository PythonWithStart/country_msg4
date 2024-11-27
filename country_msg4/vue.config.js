// module.exports = {
//   chainWebpack: config => {
//     const imgRule = config.module.rule('images')
//     imgRule.use('file-loader').loader('file-loader').options({
//       name: '[name].[hash:8].[ext]',
//       outputPath: 'images/',
//       publicPath: 'images/',
//       esModule: false // 添加此行以支持 CommonJS
//     })
//   }
// }

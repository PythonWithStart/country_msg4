module.exports = {
    transpileDependencies: [],
    // 禁用 ESLint 检查
    lintOnSave: false,
    
    // 开发服务器配置
    devServer: {
        hot: true,
        open: true,
        port: 8080,
        // 添加编译性能优化
        overlay: {
            warnings: false,
            errors: true
        }
    },
    
    // 配置优化
    configureWebpack: {
        // 性能提示
        performance: {
            hints: false
        },
        // 优化配置
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: 10,
                        chunks: 'initial'
                    }
                }
            }
        }
    },
    
    chainWebpack: config => {
        // 彻底移除 ESLint loader
        config.module.rules.delete('eslint')
        
        // 性能优化：缓存配置
        config.cache(true)
        
        // 优化构建性能
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimize(true)
        }
    }
}

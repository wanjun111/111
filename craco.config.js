const CracoLessPlugin = require('craco-less')
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
    webpack: {
        alias: {
            '@@': pathResolve('.'),
            '@': pathResolve('src'),
            '@assets': pathResolve('src/assets'),
            '@components': pathResolve('src/components'),
            '@view': pathResolve('src/view'),
            '@redux': pathResolve('src/redux'),
            '@utils': pathResolve('src/utils')
            // 此处是一个示例，实际可根据各自需求配置
        }
    },
    babel: {
        plugins: [
            ['import',
                {
                    libraryName: 'antd',
                    libraryDirectory: "es",
                    style: true,
                }],
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},// 全局主色
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}


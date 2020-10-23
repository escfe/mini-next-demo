mini-next支持自定义webpack中的指定配置项 

## 支持的配置项
```
// config/mini-next.config.js
module.exports = {
    webpack: {
        loader: {
            js: [],
            jsx: [],
            css: [],
            scss: [],
            less: [],
            img: []
        },
        externals: {
        },
        extensions: [],
        alias: {
            images: path.join(process.cwd() + '/src/images')
        },
        plugins: []
    }
 };
```
### 具体配置示例
```
// config/mini-next.config.js
const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  webpack: {
    loader: {
        scss: [
            {
                loader: 'css-loader',
                options: {
                    url: true,
                    minimize: false,
                    modules: true
                }
            },
            {
                loader: 'sass-loader'
            }
        ],
        less: [
            {
                loader: 'css-loader',
                options: {
                    url: true,
                    minimize: false,
                    mudules: true
                }
            },
            {
                loader: 'less-loader'
            }
        ],
        img: [{
            loader: 'url-loader',
            options: {
                name: '[hash:5].[name].[ext]',
                limit: 8192,
                outputPath: 'publicImages/'
            }
        }]
    },
    externals: {},
    extensions: ['.js', '.css', '.scss'],
    alias: {
        images: path.join(process.cwd() + '/src/images')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/mock', to: 'build' }
              ]
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom',
            Component: ['react','Component'] // 导出react模块中的Component
        })
    ]
  }
}
## 框架默认集成webpack配置
mini-next基于webpack@4.0+,Bable@7.0+进行项目编译,默认集成配置项如下
### loader
- babel-loader
- less-loader
- css-loader
- sass-loader
- postcss-loader
- url-loader

### extensions
` ['.js', '.jsx','.ts','tsx','.css', '.scss']`

### alias

```js
alias: {
        components: srcPath + '/components',
        images: srcPath + '/images',
        mock: srcPath + '/mock',
        skin: srcPath + '/skin',
        utils: srcPath + '/utils',
        config: srcPath + '/config'
    }
```

### DefinePlugin
开发者在js中通过`process.env.NODE_ENV`可以进行环境的区分。
```
'process.env': NODE_ENV: JSON.stringify(dev ? 'development' : 'production')
```

### devServer
- `port:8080`
- `hot:true`
- `contentBase: ${srcPath}`


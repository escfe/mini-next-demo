
# 项目目录结构
```
├── app.js  // ssr node启动文件
├── package.json
└── src
    └── pages
        └── demo
            ├── demo.js // 入口文件
            └── demo.scss

```

# 安装
```
yarn add mini-next 
or
npm install -S mini-next
```

## package.json
```
"scripts": {
    "start":"node app.js", // 服务端渲染模式【推荐】
    "dev":"npx mini-next dev",  // 客户端渲染预览开发【不建议】
    "build":"npx mini-next build" // 服务端渲染模式时提前编译
    "output":"npx mini-next output" // 导出静态资源
  },

```

## app.js
```
const Koa = require('koa');
const miniNext = require('mini-next');
const app = new Koa();
new miniNext(app); // mini-next服务端渲染基于koa封装，开启ssr时需传入koa实例对象
app.listen(8001);

```

## 开发预览
mini-next采用多入口配置，src/pages下按照文件夹项目进行项目代码隔离，无论客户端还是服务端渲染均使用项目文件夹名称进行路由匹配。`eg:localhost:8001/index` 访问项目`index`.
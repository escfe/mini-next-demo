pages目录下必须为项目文件夹，项目名不能命名为`index`
```
└── src
    └── pages
        └── demo
            ├── demo.js // 入口文件
            └── demo.scss
```

## 默认路由（未支持）
pages目录下`_index.js` 或者 `_index.jsx`,框架会默认匹配为默认路由匹配为首页。


## layout (未支持)
layout为项目公共部分的代码，比如页头，页脚。文件位于pages目录下新建的`_layout.js` 或者 `_layout.jsx`
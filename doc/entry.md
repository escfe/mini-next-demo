## entry
- entry.js文件需使用`export default`导出组件。

```js
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="demo">
                hello mini-next
            </div>
        );
    }
}

```
- 项目如果使用路由，暴露组件为` <Switch>`包裹的`<Route>`
````js
export default class APP extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/about/:msg" component={About} />
                <Route component={Home} />
            </Switch>
        );
    }
}

```
- 无需使用ReactDOM.render进行渲染（这一步由mini-next框架完成，可在.mini-next目录下根据页面名称查看对应的js）


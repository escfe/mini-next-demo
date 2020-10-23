## 服务端&客户端数据统一 
1.服务端渲染预初始化数据，**getInitialProps**函数，参数接受`ctx`对象
``` 
APP.getInitialProps = async (ctx,query,pathname) => {
        //...
        return { count: 1 }
    }
```
return返回的属性会挂载到组件的props上

2.客户端通过组件的props获取服务端数据
```
let APP = props => {
    const [count, setCount] = useState(props.count);
    return (
        <div>
            <span>Coweunt: {count}</span>
        </div>
    );
};
```
props除了挂载我们getInitialProps的返回值外，还会挂载url中的的pathname和query，可通过全局对象`window.__miniNext_DATA__`访问服务端预渲染返回的初始化数据。
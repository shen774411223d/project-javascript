
###   - 关于React和Vue的认识
###     - 区别在于this的定义上 在Vue中将api都集成到了this上 可以通过this来访问 router和Vuex 而React中this只指向该组件实例
        用到的地方需要显式的import

###     - 单项数据流：Vue中props对应React中props  Vue中data对应React中state
        数据都是从父组件流向子组件。Vue有个骚操作 由于对象是引用关系 给子组件传一个对象 在子组件直接改变这个对象不需要 $emit
###     - ref 
          - Vue使用ref="xxx"来创建 使用 this.$refs.xxx来获取
          - React首先要在constructor中创建ref  this.xxx = React.createRef() 再在组件上注入  <Demo ref = { this.xxx } />
          - ref在封装一些组件时很有用 插件自己维护自己的状态 对外暴露可访问的接口 可参考 element-ui里的组件

####    - vue-Router React-Router 两者都差不多 就是api不同 
###        - location和match的区别
            - locaton是描述地址栏的变化，地址栏的位置和参数
            - match是指 Route里的render或component与url匹配的信息；match说的是当前组件的路由信息；描述了该组件的一些路由情况
            - eg：Route的path为：/test  跳转路径为/test/16；  此时location里的信息是/test/16，而match则是/test
          - 说下React-router几个常用api
            - Switch 路由的组 在此组件里定义的Route只能渲染一个 
              - 例如： path="/admin" 和 path="/admin/info" 只会渲染第一个 跟在Switch里定义顺序有关
            - exact 精准匹配 
            - Route 路由项
              - path是要定义的路由地址
              - component要渲染的组件 eg：component = { xxx }
              - render 要渲染的组件 eg： render = { props => <xxx { ...props }> } 和component的区别是这种写法可以传参数
            - Redirect  重定向
###     - Redux 的api
          - Action 将数据从组件传递到 Redux 必须要通过Action去调用  比较像Vuex里的 this.$store.commit('xxx', payload);
            - 在Vuex里写个字符串方法名就行了 但在Redux里 需要 dispatch(method(payload)); method是个function
          - Reducer 接收Action 可以在Reducer里定义初始数据(对应Vuex里的state)
            在Reducer里不能直接改变state需要return出一个新的对象 
          - Store 托管Reducer的地方 在此将 Action和Reducer结合到一起
            - Store有几个方法
              - getState() 获取最新state
              - dispatch() 发送事件更新state
              - subscribe() 注册监听器
          - 如何使用Redux来请求接口
            使用thunkMiddleware中间件 并用applyMiddleware添加中间件
            在Action里return一个函数 函数接受 dispath 参数 请求完成后 调用dispatch
          - 对于Redux默认数据
            - 可以在Reducers里指定默认数据 使用es6中的默认参数语法 function myReducer(state = someDefaultValue, action)
            - 还可以在createStore里指定第二个参数  传进一个对象
            - 其key值为reducers
            例如：
              const statusOption = (state = {}, action) => {
                switch(action.type) {
                  case 'SET_STATUS':
                    return { ...state, status: action.payload };
                  default:
                    return state;
                }
              }
              export default combineReducers({
                statusOption
              });
              
              在createStore中的第二个参数为： createStore(Reducers, { statusOption: { status: false } })

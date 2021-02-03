
import React, {createContext} from 'react'
export const createStore = (reducer, initState = {}) => {
  let currentState = initState
  let observers = []

  function getState () {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    // 每次执行一次dispatch（也代表着一次state/reducer的更新/执行）就要调用所用订阅者
    observers.forEach(fn => fn())
  }
  // 这个观察者/发布订阅写的如此简单，是因为subscribe不需要key做区分。它的作用就是dispatch后被调用
  function subscribe(fn) {
    observers.push(fn)
  }

  return {getState, dispatch, subscribe}
}

export const RootContext = createContext({store: null})

// 利用React.context 创建一个Provider组件。向下传递store
/**
 <Provider store={store}>
    <App />
 </Provider>
 */
export class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }
  render() {
    const context = {store: this.store}
    return (
      <RootContext.Provider value={context}>
        {this.props.children}
      </RootContext.Provider>
    )
  }
}

export function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return class extends React.Component {
      static contextType = RootContext
      // 当connect连接时，就注册一个订阅者。每次收到回调就强行刷新子组件
      // 为了演示 会直接使用forceUpdate。其实使用setState会更好。或者直接触发内部diff/re-render
      componentDidMount() {
        this.context.store.subscribe(this.updateState)
      }
  
      updateState = () => {
        this.forceUpdate()
      }

      render() {
        const {dispatch, getState} = this.context.store
        const props = {
          dispatch,
        }
        if(mapStateToProps) {
          Object.assign(props, {...mapStateToProps(getState())})
        }

        // 按照redux的文档上，这个参数可以接收 function和object类型的参数。作用各有不同
        if(typeof mapDispatchToProps === 'function') {
          Object.assign(props, ...mapDispatchToProps(dispatch))
        }

        if(typeof mapDispatchToProps === 'object') {
          let dispatchs = {}
          for(let fnName in mapDispatchToProps) {
            dispatchs[fnName] = (payload) => dispatch(mapDispatchToProps[fnName](payload))
          }
          Object.assign(props, {...dispatchs})
        }

        return <Component {...props} />
      }
    }
  }
}
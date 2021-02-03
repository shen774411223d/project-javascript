
import React, {createContext} from 'react'
export const createStore = (reducer, initState = {}) => {
  let currentState = initState
  let observers = []

  function getState () {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    observers.forEach(fn => fn())
  }

  function subscribe(fn) {
    observers.push(fn)
  }

  return {getState, dispatch, subscribe}
}

export const RootContext = createContext({store: null})

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
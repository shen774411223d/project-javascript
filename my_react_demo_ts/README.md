
# my_demo_react_ts

* ### HOW USE
  - #### git clone XXX
  - #### npm install && npm start / yarn && yarn start

* ### Guide
  - #### 引入了Redux-observable和Rxjs，将副作用代码全部提到Epic中间件里
  - #### 脚手架为 create-react-app --typescript
  - #### 引入的库：Rxjs + Redux-observable + typesafe-actions
  - #### 建议使用 tsx + Hooks

* ### Redux/
  - #### actions.js: 使用typesafe-actions定义action，一个异步action要包括4部分：
    - request
    - success
    - cancel
    - failure
  - #### epics.js: Redux的中间件，内部使用Rxjs处理业务
  - #### reducers.js: 使用typesafe-actions定义reducer
  - #### store.js 常规store
  

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './redux'

import { reducer, returnType } from './redux/indexComponent'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
//</Provider>（容器） 组件：负责在数据的处理，也可以携带数据
import thunk from 'redux-thunk'
let store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk)  //中间件用于处理方法
    )
)

function render() {
    ReactDOM.render(
        //React.StrictMode 为React的严格模式
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render()
store.subscribe(render)



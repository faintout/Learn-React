import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './redux'

import { reducer, returnType } from './redux/indexComponent'
import { createStore } from 'redux'

let store = createStore(reducer)

function render() {
    ReactDOM.render(
        //React.StrictMode 为React的严格模式
        <React.StrictMode>
            <App 
            store={store}
            returnType = {returnType}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render()
store.subscribe(render)





import React, { Component } from 'react'
//关联数据
import './css/index.css'

export default class App extends Component {
    state = {
        store:this.props.store,
        returnType:this.props.returnType
    }
    render() {
        return (
            <div className="App">
                <hr/>
                <div>
                    <button
                    onClick={()=>{this.state.store.dispatch(this.state.returnType('add'))}}
                    >+</button>
                    ({this.state.store.getState()})
                    <button
                    onClick={()=>{this.state.store.dispatch(this.state.returnType('del'))}}
                    >-</button>
                    <br/>
                    <button
                    onClick={()=>{this.state.store.dispatch(this.state.returnType(''))}}
                    >重置</button>
                </div>
            </div>
        );
    }
}

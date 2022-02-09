

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSync, returnType } from './redux/indexComponent'
//关联数据
import './css/index.css'

export default class App extends Component {
    // state = {
    //     store:this.props.store,
    //     returnType:this.props.returnType
    // }
    render() {
        return (
            <div className="App">
                <hr />
                <div>
                    {console.log('this.props', this.props.abc)}
                    <button
                        onClick={() => { this.props.returnType('add') }}
                    >+</button>

                    ({this.props.abc})

                    <button
                        onClick={() => { this.props.returnType('del') }}
                    >-</button>

                    <br />

                    <button
                        onClick={() => { this.props.returnType('') }}
                    >重置</button>

                    <button
                        onClick={() => { this.props.addSync() }}
                    >异步</button>
                </div>
            </div>
        );
    }
}

//stateMap
const mapStateToProps = state => {
    return { abc: state }
}

//dispatchMap
const mapDispatchToProps = { returnType, addSync }

//连接
App = connect(mapStateToProps, mapDispatchToProps)(App)

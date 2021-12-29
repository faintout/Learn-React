import React, { Component } from 'react'
import {
    Redirect
} from 'react-router-dom'

export default class User extends Component {
    state = {
        status:1,
        times:undefined
    }
    componentDidMount(){
        this.state.times = setTimeout(()=>{
            this.setState({
                status:2
            })
        },2000)
    }
    componentWillUnmount(){
        this.state.times&&clearTimeout(this.state.times)
    }
    render() {
        return (
            <div>
                {this.state.status===2&&<Redirect to={'/'}/>}
                (User用户)
            </div>
        )
    }
}

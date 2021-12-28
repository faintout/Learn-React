import React, { Component } from 'react'
export default class NewsDetail extends Component {
    render() {
        console.log('this.props',window.location)
        return (
            <div>
                 {window.location.pathname}
            </div>
        )
    }
}

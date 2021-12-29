import React, { Component } from 'react'
export default class NewsDetail extends Component {
    render() {
        
        return (
            <div>
              组件：  
                 {window.location.pathname}
                 ({console.log('this.props',this.props)})
            </div>
        )
    }
}

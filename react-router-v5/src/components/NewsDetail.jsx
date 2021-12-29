import React, { Component } from 'react'
export default class NewsDetail extends Component {
    render() {
        let {id} = this.props.match.params
        return (
            <div>
              组件ID：  
                 {id}
            </div>
        )
    }
}

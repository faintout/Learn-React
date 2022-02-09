import { Tag } from 'antd'
import React, { Component } from 'react'
const typeMap = {
    top:{
        color:'red',
        txt:'置顶'
    },
    good:{
        color:'lime',
        txt:'精华'
    },
    ask:{
        color:'green',
        txt:'问答'
    },
    job:{
        color:'mageta',
        txt:'招聘'
    },
    dev:{
        color:'purple',
        txt:'测试'
    },
    share:{
        color:'orange',
        txt:'分享'
    },
}
function getType(data) {
    return (
        data.top?'top':data.good?'good':(data.tab||'top')
    )
}
export default class TextTag extends Component {
    render() {
        let type = getType(this.props.data)
        let typeInfo = typeMap[type]
        return (
            <Tag color={typeInfo.color}>{typeInfo.txt}</Tag>
        )
    }
}

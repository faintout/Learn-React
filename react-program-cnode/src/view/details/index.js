import React, { Component } from 'react'
import { Card, Avatar, Divider,List } from "antd"
import { Link } from 'react-router-dom'
import TextTag from '../../components/textTag'
import Commit from './commit'
import DetailInfo from './detailInfo'
export default class Details extends Component {
    render() {
        let detailId = this.props.match.params.id
        return (
            <div className='wrap'>
                <DetailInfo detailId={detailId}></DetailInfo>
                <Commit detailId={detailId}></Commit>
            </div>
        )
    }
}

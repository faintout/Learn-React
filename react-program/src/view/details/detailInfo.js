import React, { Component } from 'react'
import { Card, Avatar,Divider } from "antd"
import { Link } from 'react-router-dom'
import TextTag from '../../components/textTag'
import Commit from './commit'
import {connect} from "react-redux"
import axios from 'axios'
class DetailInfo extends Component {
    constructor(args){
        super(args)
        this.state = {
            detailId:this.props.detailId
        }
        this.getDetailInfo()
    }
    //获取文章详情
    getDetailInfo(){
        this.props.dispatch(async dispatch => {
            let { data: { data: detailInfo } } = await axios.get(`https://cnodejs.org/api/v1/topic/${this.state.detailId}`)
            await dispatch({ 'type': 'updateDetailInfo', data: detailInfo })
        })
    }
    render() {
        let { content,author,title,create_at } = this.props.data
        //获取路由信息
        return this.props.data&&(
            <Card
            >
                <Card.Meta
                    title={
                        <div> <h2>{title}</h2>
                            <TextTag data={this.props.data
                            }></TextTag>
                            <Avatar src={author.avatar_url}></Avatar>
                            <Link to={'/user/'+author.loginname}> {author.loginname}  </Link>
                            发表于：{create_at}
                        </div>
                    }>

                </Card.Meta>
                {/* 横线 */}
                <Divider ></Divider>
                <div
                className='detail-content' 
                dangerouslySetInnerHTML={{
                    __html:content
                }}
                >
                </div>

            </Card>
        )
    }
}

export default connect(state => state.details)(DetailInfo)

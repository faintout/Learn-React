import React, { Component } from 'react'
import { Card, Avatar, List } from "antd"
import { Link } from 'react-router-dom'
// let arr = []
// const typeList = ['top', 'good', 'ask', 'job', 'test', 'share']
// for (let i = 0; i < 50; i++) {
//     arr.push({
//         name: Math.random(),
//         title: '这是123123qewqweqtitle' + i,
//         good: !!i % 4 == 0, top: !!i % 3 == 0,
//         user: "我是用户" + i,
//         type: typeList[Math.floor(Math.random() * 6)]
//     })
// }
import { connect } from "react-redux"
class Commit extends Component {
    render() {
        return (
                <List
                className='add-border'
                    dataSource={this.props.data.replies}
                    renderItem={
                        item => (
                            <List.Item
                                actions={[
                                    "有" + item.ups.length + "位用户点赞了",
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <Avatar className='commit-avatar' src={item.author.avatar_url}></Avatar>
                                    }
                                    title={
                                        <p>
                                            <Link to={'/user/' + item.author.loginname}>{item.author.loginname}</Link>  
                                            &nbsp;&nbsp;发表与：{item.create_at}
                                        </p>
                                    }
                                    description={
                                        <div
                                        dangerouslySetInnerHTML={{
                                            __html:item.content
                                        }}>

                                        </div>
                                    }
                                >
                                </List.Item.Meta>
                            </List.Item>
                        )
                    }
                />
        )
    }
}

export default connect(state=>state.details)(Commit)

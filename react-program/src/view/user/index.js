
import React, { Component } from 'react'
import { Col, Menu, Row, Pagination, Divider, Tabs ,Avatar} from 'antd'
// import { Link} from "react-router-dom"
// import MenuList from './menuList'
import IndexList from './indexList'
import moment from 'moment'
import axios from 'axios'
export default class User extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            userInfo: null
        }
        this.getUserInfo()
    }
    async getUserInfo() {
        let tab = this.props.match.params.id
        let { data: { data: userInfo } } = await axios.get(`https://cnodejs.org/api/v1/user/${tab}`)
        // await dispatch({ 'type': 'updateDetailInfo', data: detailInfo })
        console.log('userData', userInfo);
        this.setState({
            userInfo: userInfo
        })
    }
    render() {
        const userInfo = this.state.userInfo
        return (
            <Row className='content'>
                <Col md={24} className='user-content'>
                    <div className='user-info'>
                        <div className='user-img'>
                            {/* <img src={userInfo?.avatar_url}></img> */}
                            <Avatar src={userInfo?.avatar_url}></Avatar>
                        </div>
                        <div className='user-name'>{userInfo?.loginname}</div>
                        <div className='score-create'>
                            <span>注册时间：{moment(userInfo?.create_at).format('lll')}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>积分：{userInfo?.score}</span>
                        </div>
                        <div className='git'>
                            <svg height="12" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            &nbsp;&nbsp;
                            <span className='cur-pointer' onClick={() => { window.open(`https://github.com/${userInfo?.githubUsername}`) }}>{userInfo?.githubUsername}</span>
                        </div>
                    </div>

                    <Tabs defaultActiveKey="1" className='pd-10'>
                        <Tabs.TabPane tab="主题" key="1">
                            <IndexList
                                data={userInfo?.recent_topics}
                            />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="回复" key="2">
                            <IndexList
                                data={userInfo?.recent_replies}
                            />
                        </Tabs.TabPane>
                    </Tabs>
                    {/* <Divider ></Divider>
                    
                    <Divider ></Divider> */}

                </Col>
            </Row>
        )
    }
}
import React, { Component } from 'react'
import { Col, Menu, Row } from 'antd'
import { Link} from "react-router-dom"
export default class MenuList extends Component {
    render() {
        return (
            <Menu className='content-left' defaultSelectedKeys={['all']}>
                <Menu.Item  key={'all'}><Link to={'/index/all'}></Link>全部</Menu.Item>
                <Menu.Item key={'good'}><Link to={'/index/good'}></Link>精华</Menu.Item>
                <Menu.Item key={'ask'}><Link to={'/index/ask'}></Link>问答</Menu.Item>
                <Menu.Item key={'share'}><Link to={'/index/share'}></Link>分享</Menu.Item>
                <Menu.Item key={'job'}><Link to={'/index/job'}></Link>招聘</Menu.Item>
                <Menu.Item key={'dev'}><Link to={'/index/dev'}></Link>测试</Menu.Item>
            </Menu>
        )
    }
}

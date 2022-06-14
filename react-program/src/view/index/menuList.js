import React, { Component } from 'react'
import { Col, Menu, Row } from 'antd'
import { Link} from "react-router-dom"
export default class MenuList extends Component {
    render() {
        const menuList = [
            {
                key:'all',
                name:'全部',
                to:'/index/all',
            },
            {
                key:'good',
                name:'精华',
                to:'/index/good',
            },
            {
                key:'ask',
                name:'问答',
                to:'/index/ask',
            },
            {
                key:'share',
                name:'分享',
                to:'/index/share',
            },
            {
                key:'job',
                name:'招聘',
                to:'/index/job',
            },
            {
                key:'dev',
                name:'测试',
                to:'/index/dev',
            },
        ]
        return (
            <Menu className='content-left' defaultSelectedKeys={['all']}>
                <Menu.Item  key={'all'}><Link to={'/index/all'}></Link>全部</Menu.Item>
                <Menu.Item key={'good'}><Link to={'/index/good'}></Link>精华</Menu.Item>
                <Menu.Item key={'ask'}><Link to={'/index/ask'}></Link>问答</Menu.Item>
                <Menu.Item key={'share'}><Link to={'/index/share'}></Link>分享</Menu.Item>
                <Menu.Item key={'job'}><Link to={'/index/job'}></Link>招聘</Menu.Item>
                <Menu.Item key={'dev'}><Link to={'/index/dev'}></Link>测试</Menu.Item>
            </Menu >
            // <Menu items={menuList} className='content-left' defaultSelectedKeys={['all']} />
        )
    }
}

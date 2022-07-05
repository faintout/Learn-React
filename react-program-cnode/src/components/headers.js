import React, { Component } from 'react'
import { Col, Divider, Layout, Row, Menu,Icon} from 'antd'
import {
    HomeOutlined,
    BookOutlined,
    CoffeeOutlined,
  } from '@ant-design/icons';
import '../assets/css/index.css'
import { Link } from 'react-router-dom'
export default class Headers extends Component {
    render() {
        return (
            <div>
                <Layout.Header>
                    <Row className='header'>
                        <Col md={6} className='header-left'>
                            <h1>
                                i am headers
                            </h1>
                        </Col>
                        <Col md={18} className='header-right'>
                            <Divider type='vertical' className='header-divider'></Divider>
                            <Menu mode='horizontal' className='menu' theme='light' defaultSelectedKeys={['index']}>
                                <Menu.Item key={'index'}>  <Link to={'/index/all'}><HomeOutlined />&nbsp;&nbsp;主页</Link></Menu.Item>
                                <Menu.Item key={'book'}><Link to={'/book'}><BookOutlined />&nbsp;&nbsp;教程</Link></Menu.Item>
                                <Menu.Item key={'about'}><Link to={'/about'}><CoffeeOutlined />&nbsp;&nbsp;关于</Link></Menu.Item>
                            </Menu>
                        </Col>
                    </Row>

                </Layout.Header>
            </div>
        )
    }
}


import React, { Component } from 'react'
import { Col, Menu, Row,Pagination } from 'antd'
import { Link} from "react-router-dom"
import MenuList from './menuList'
import IndexList from './indexList'
export default class Index extends Component {
    render() {
        let tab = this.props.match.params.id
        return (
            <div>
                {/* <Layout.> */}
                <Row className='content'> 
                    <Col md={6} className='content-left'>
                        <MenuList></MenuList>
                    </Col>
                    <Col md={18}>
                        <IndexList tab={tab}></IndexList>
                    </Col>
                </Row>
            </div>
        )
    }
}

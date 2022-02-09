import React, { Component } from 'react'
import { Card } from 'antd'
import {Link} from 'react-router-dom'
import Avatar from 'antd/lib/avatar/avatar'
export default class Book extends Component {
    render() {
        return (
           <Card
           className='wrap'>
               <Card.Meta
               title={
                   <h2>book教程</h2>
               }
               >
                   
               </Card.Meta>
               <div
                   dangerouslySetInnerHTML={{
                       __html:"<h3>我是测试内容</h3>"
                   }}
                   >
                       
                   </div>
           </Card>
        )
    }
}

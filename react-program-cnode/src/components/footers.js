import React, { Component } from 'react'
import {Layout} from 'antd'

export default class Footers extends Component {
    render() {
        return (
            <div>
                <Layout.Footer className='footer'>
                    此处显示备案信息
                </Layout.Footer>
            </div>
        )
    }
}

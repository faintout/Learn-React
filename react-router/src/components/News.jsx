import React, { Component } from 'react'
import {
    NavLink,
} from 'react-router-dom'
export default class News extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to={'/NewsDetail/1111'}>1111</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/NewsDetail/2222'}>2222</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/NewsDetail/3333'}>3333</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/NewsDetail/4444'}>4444</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

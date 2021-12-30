import React, { Component } from 'react'
import {
    NavLink,
    Routes,
    Route
} from 'react-router-dom'
import NewsDetail from './NewsDetail'
export default class News extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to={'NewsDetail/1111'}>1111</NavLink>
                    </li>
                    <li>
                        <NavLink to={'NewsDetail/2222'}>2222</NavLink>
                    </li>
                    <li>
                        <NavLink to={'NewsDetail/3333'}>3333</NavLink>
                    </li>
                    <li>
                        <NavLink to={'NewsDetail/4444'}>4444</NavLink>
                    </li>
                </ul>
                <hr />

                <div className="con">
                    <Routes>
                         <Route path= {'NewsDetail/:id'}  element={<NewsDetail />}></Route>
                    </Routes>
                </div>
            </div>
        )
    }
}

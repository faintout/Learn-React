
import User from './components/User'
import {
    BrowserRouter,
    NavLink,
    Route,
    Routes
} from 'react-router-dom'
import Home from './components/Home';
import NoPage from './components/NoPage';
import News from './components/News';
import React, { Component } from 'react'
import './css/index.css'
import NewsDetail from './components/NewsDetail';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                {
                    <BrowserRouter>

                        <NavLink className={({isActive}) => isActive ? 'select' : null} to={'/'} >首页</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'select' : null} to={'/User'} >用户</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'select' : null} to={'/News'} >新闻</NavLink>
                        <br />
                        <br />
                        <hr />
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/User" element={<User />}></Route>
                            <Route path="/News" element={<News />}></Route>
                            <Route path="/NewsDetail/:id" element={<NewsDetail />}></Route>
                            <Route path="*" element={<NoPage />}></Route>
                        </Routes>
                    </BrowserRouter>
                }
            </div>
        );
    }
}


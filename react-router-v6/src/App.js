
// import User from './components/User'
import {
    BrowserRouter,
    NavLink,
    Route,
    Routes
} from 'react-router-dom'
// import Home from './components/Home';
// import NoPage from './components/NoPage';
// import News from './components/News';
import React, { Component } from 'react'
import './css/index.css'
import {routes} from './router/index'
// import NewsDetail from './components/NewsDetail';

export default class App extends Component {
    state = {
        arr:[]
    }
    getDate=()=>{
        let arr= [
            {
                name:'首页',
                to:'/'
            }, 
            {
                name:'用户',
                to:'/User'
            }, 
            {
                name:'新闻',
                to:'/News'
            }, 
        ]
        this.setState({
            arr
        })
    }
    componentDidMount(){
        //获取getDate()
        this.getDate()
    }
    render() {
        return (
            <div className="App">
                {
                    <BrowserRouter>
                {
                    this.state.arr.length&&this.state.arr.map((arr,index)=>{
                       return  <NavLink  key={index}  className={({isActive}) => isActive ? 'select' : null} {...arr} >{arr.name}</NavLink>
                    })
                }
                        {/* <NavLink className={({isActive}) => isActive ? 'select' : null} to={'/'} >首页</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'select' : null} to={'/User'} >用户</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'select' : null} to={'/News'} >新闻</NavLink> */}
                        <br />
                        <br />
                        <hr />
                        
                        <Routes>
                        {routes.length&&routes.map((route,index)=>{
                            if(route.children?.length){
                                return <Route key={index} path={route.path} 
                                render={(props)=>{
                                    console.log(props)
                                    return <route.element />
                                }}
                                ></Route>
                            }else{
                                return <Route key={index} path={route.path} element={route.element} ></Route>
                            }
                        })}
                            {/* <Route path="/" element={<Home />}></Route>
                            <Route path="/User" element={<User />}></Route>
                            <Route path="/News/*" element={<News />}></Route>
                            <Route path="*" element={<NoPage />}></Route> */}
                        </Routes>
                    </BrowserRouter>
                }
            </div>
        );
    }
}


import React, { Component } from 'react'
import {
    NavLink,
    Switch,
    Route
} from 'react-router-dom'
import NewsDetail from './NewsDetail'
import NoPage from './NoPage'
export default class News extends Component {
    render() {
        let routesList = this.props.routes
        
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to={'/News/NewsDetail/1111'}>1111</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/News/NewsDetail/2222'}>2222</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/News/NewsDetail/3333'}>3333</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/News/NewsDetail/4444'}>4444</NavLink>
                    </li>
                </ul>
                <hr />
                <div className="con">
                    <Switch>
                        {
                            routesList.length&&routesList.map((route,index)=>{
                                if(route.exact){
                                   return <Route key={index} exact path= {route.path}  component={route.element}></Route>
                                }else{
                                    return <Route key={index}  path= {route.path}  component={route.element}></Route>
                                }
                            })
                        }
                         {/* <Route path= {'/News/NewsDetail/:id'}  component={NewsDetail}></Route>
                         <Route component={NoPage}></Route> */}
                    </Switch>
                </div>
            </div>
        )
    }
}

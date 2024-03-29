import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from '../view/about'
import Book from '../view/book'
import Details from '../view/details'
import Index from '../view/index/index'
import User from '../view/user'
export default class RouterIndex extends Component {
    render() {
        return (
            <div>
              <Switch>
                <Route path='/' exact render={()=>
                    <Redirect to='/index/all'/>
                }/>
                <Route path='/details/:id' component={Details}></Route>
                <Route path='/index/:id' component={Index}></Route>
                <Route path='/user/:id' component={User}></Route>
                <Route path='/book' component={Book}></Route>
                <Route path='/about' component={About}></Route>
                {/* {routes.length&&routes.map((route,index)=>{
                            if(!route.exact){
                                return <Route key={index} path={route.path} 
                                render={(props)=>{
                                    return <route.element routes={route.children} />
                                }}
                                ></Route>
                            }else{
                                return <Route exact key={index} path={route.path} component={route.element} ></Route>
                            }
                            // if(route.children?.length){
                            //     return <Route key={index} path={route.path} 
                            //     render={(props)=>{
                            //         return <route.element />
                            //     }}
                            //     ></Route>
                            // }else{
                            //     return <Route key={index} path={route.path} component={route.element} ></Route>
                            // }
                        })} */}
              </Switch>
            </div>
        )
    }
}

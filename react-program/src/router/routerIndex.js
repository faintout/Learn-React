import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from '../view/about'
import Book from '../view/book'
import Details from '../view/details'
import Index from '../view/index'
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
                <Route path='/book' component={Book}></Route>
                <Route path='/about' component={About}></Route>
              </Switch>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './index.scss'
import Nav from './Nav.js'
import {Route} from 'react-router-dom'
import Hot from './Hot';
import Comming from './Comming'

export default class Home extends Component {
    render() {
        return (
            <div class='container'>
                <Nav></Nav>
                <Route path='/home/hot' component={Hot}></Route>
                <Route path='/home/comming' component={Comming}></Route>
            </div>
        )
    }
}

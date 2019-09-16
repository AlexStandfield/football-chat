import React, { Component } from 'react'
import routes from './routes'

import { withRouter } from "react-router";

// StyleSheets
import 'reset-css'
import './App.css'

import Nav from './Components/Nav/Nav'

class App extends Component {
 render() {
   return (
     <div className='app-container'>
       {this.props.location.pathname === '/' || this.props.location.pathname === '/authRegister' ?
         null
         :
         <Nav />
       }
       {routes}
     </div>
   )
 }
}
export default withRouter(App)


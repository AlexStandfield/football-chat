import React from 'react'
import {Switch, Route} from 'react-router-dom'


// Components
import Auth from './Components/Auth/Auth'
import AuthRegister from './Components/AuthRegister/AuthRegister'
import Home from './Components/Home/Home'
import ProfileUser from './Components/User/ProfileUser/ProfileUser'
import TeamsUser from './Components/User/TeamsUser/TeamsUser'
import UpdateUser from './Components/User/UpdateUser/UpdateUser'

import Post from './Components/Admin/Post/Post'
import ProfileAdmin from './Components/Admin/ProfileAdmin/ProfileAdmin'
import TeamsAdmin from './Components/Admin/TeamsAdmin/TeamsAdmin'

// Router
export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/authRegister' component={AuthRegister} />
        <Route path='/home' component={Home} />
        <Route path='/profileUser' component={ProfileUser} />
        <Route path='/teamsUser' component={TeamsUser} />
        <Route path='/updateUser' component={UpdateUser} />

        <Route path='/post/:postid' component={Post} />
        <Route path='/profileAdmin' component={ProfileAdmin} />
        <Route path='/teamsAdmin' component={TeamsAdmin} />
    </Switch>
)
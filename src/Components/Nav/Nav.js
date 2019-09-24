import React, { Component } from 'react'

import {Link, withRouter} from 'react-router-dom'

import {registerUser} from '../../redux/reducer'

import {connect} from 'react-redux'

import * as Icon from 'react-feather'

import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <div className='navbar-lines'>
                    <Icon.Menu className='navbar-icon' />
                </div>
                <div className='top-nav'>
                    <div className='logo'>
                        <p>Locker Room Chat</p>
                    </div>
                    <div className='icon-border'>
                        <Link to='/profileUser' >
                            <Icon.User className='user-icon' />
                        </Link>
                    </div>
                    <Link to='/home'>
                        <Icon.Home className='home-icon' />
                    </Link>
                    <Link to='/userFavTeams'>
                        <button className='teams-button'>
                            Teams
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps, {registerUser})(Nav))

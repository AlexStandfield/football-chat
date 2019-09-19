import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import * as Icon from 'react-feather'

import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <div className='top-nav'>
                    <div className='logo'>
                        <p>Football Chat</p>
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

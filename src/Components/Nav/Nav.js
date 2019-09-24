import React, { Component } from 'react'

import {Link, withRouter} from 'react-router-dom'

import {registerUser} from '../../redux/reducer'

import {connect} from 'react-redux'

import * as Icon from 'react-feather'

import './Nav.css'

class Nav extends Component {
    constructor(){
        super()

        this.state = {
            navToggle: false
        }
    }

    toggle = () => {
        this.setState({
            navToggle: !this.state.navToggle
        })
    }

    render() {
        console.log(this.state.navToggle)
        return (
            <div className='nav-bar'>
                <Icon.Menu onClick={this.toggle} className={'navbar-icon'} />

                <div className='top-nav'>
                    <div className='logo'>
                        <div className='lockerroom'>LockerRoom</div><div className='chat'>Chat</div>
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

                <div className={this.state.navToggle ? 'menu slide' : 'menu'}>
                    <div className='logo'>
                        
                        <div className='lockerroom'>LockerRoom</div><div className='chat'>Chat</div>
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

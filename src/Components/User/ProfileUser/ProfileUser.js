import React, { Component } from 'react'
import axios from 'axios'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import {registerUser} from '../../../redux/reducer'

import './ProfileUser.css'

class ProfileUser extends Component {
    constructor(){
        super()

        this.state = {
            full_name: '',
            email: '',
            username: '',
            admin: ''
        }
    }

    logout = () => {
        axios.get('/api/auth/logout')
            .then(res => {
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className='profile-users'>
                <div className='profile-box'>
                    <div className='input-boxes'>
                        <label className='labels'>Full Name:</label>
                        <h3>{this.props.user.full_name} </h3>
                    </div>

                    <div className='input-boxes'>
                        <label className='labels'>Email:</label>
                        <h3>{this.props.user.email} </h3>
                    </div>

                    <div className='input-boxes'>
                        <label className='labels'>Username:</label>
                        <h3>{this.props.user.username} </h3>
                    </div>

                    <div className='input-boxes'>
                        <label className='labels'>Admin:</label>
                        <h3>{this.props.user.admin}</h3>
                    </div>

                    <div className='profile-buttons-box'>
                        <button className='profile-buttons' onClick={this.logout}>
                            Logout
                        </button>
                        
                        <Link to='/updateUser'>
                            <button className='profile-buttons' >
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps, {registerUser})(ProfileUser))
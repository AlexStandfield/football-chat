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
                    <div>
                        <label>Full Name:</label>
                        <h3>{this.props.full_name} </h3>
                    </div>

                    <div>
                        <label>Email:</label>
                        <h3>{this.props.email} </h3>
                    </div>

                    <div>
                        <label>Username:</label>
                        <h3>{this.props.username} </h3>
                    </div>

                    <div>
                        <label>Admin</label>
                        <h3>{this.props.admin}</h3>
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
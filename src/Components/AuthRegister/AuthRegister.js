import React, { Component } from 'react'
import axios from 'axios'

import {registerUser} from '../../redux/reducer'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'

import './AuthRegister.css'

class AuthRegister extends Component {
    constructor(){
        super()

        this.state = {
            full_name: '',
            email: '',
            username: '',
            password: '',
            admin: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
   
    toggleAdmin = () => {
        const {admin} = this.state
        this.setState({
            admin: !admin
        })
    }

    register = () => {
        const {full_name, email, username, password, admin} = this.state
        axios.post('/api/auth/register', {full_name, email, username, password, admin})
            .then(res => {
                this.props.history.push('/home')
                this.props.registerUser({full_name, email, username, admin})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        console.log(this.state)
        return (
            <div className='register-container'>
            <div className='register-box'>
                <div>
                    <label>Full Name:</label>
                    <input className='input'
                    type='text'
                    placeholder='Full Name'
                    name='full_name'
                    // value={this.state.full_mame}
                    onChange={(e) => this.handleChange(e)}
                    />
                </div>

                <div>
                <label>Email:</label>
                    <input  className='input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    // value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                    />
                </div>

                <div>
                <label>Username:</label>
                    <input  className='input'
                    type='text'
                    placeholder='Username'
                    name='username'
                    // value={this.state.username}
                    onChange={(e) => this.handleChange(e)}
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input  className='input'
                    type='password'
                    placeholder='Password'
                    name='password'
                    // value={this.state.password}
                    onChange={(e) => this.handleChange(e)}
                    />
                </div>

                <div>
                    <label>Admin:</label>
                    <input type='checkbox'
                     className='input'
                     name='admin'
                     onClick={this.toggleAdmin}
                    />
                </div>

                <div className='buttons'>
                    <Link to='/'>
                        <button>Cancel</button>
                    </Link>
                    
                    <button onClick={this.register}>Submit</button>
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps, {registerUser})(AuthRegister))
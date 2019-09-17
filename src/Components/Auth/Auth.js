import React, { Component } from 'react'
import axios from 'axios'

import './Auth.css'

import {registerUser} from '../../redux/reducer'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        const {username, password} = this.state
        axios.post('/api/auth/login', {username, password})
            .then(res => {
                this.props.registerUser(res.data)
                this.props.history.push('/home')
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='login-container'>
                <div className='login-box'>
                    <div >
                        <label>Username:</label>
                        <input className='inputs'
                        type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        />
                     </div>

                    <div>
                        <label>Password:</label>
                        <input className='inputs'
                        type='password'
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                     </div>
                    
                    <div className='buttons'>
                        <Link to='/authRegister'>
                        <button>Register</button>
                        </Link>
                        <button onClick={this.login} >Log In</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps, {registerUser})(Auth))
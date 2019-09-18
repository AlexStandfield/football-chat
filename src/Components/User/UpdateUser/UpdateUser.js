import React, { Component } from 'react'

import axios from 'axios'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import './UpdateUser.css'



class UpdateUser extends Component {
    constructor(){
        super()

        this.state = {
            full_name: '',
            email: '',
            username: '',
            password: '',
            admin: ''
        }
    }

    update = () => {
        const {full_name, email, username, password, admin} = this.reduxState
        axios.put('/api/update', {full_name, email, username, password, admin})
            .then(res => {
                
            })
    }

    toggleAdmin = () => {
        const {admin} = this.state
        this.setState({
            admin: !admin
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div className='update-users'>
                <div className='update-box'>
                    <div>
                        <label>Full Name:</label>
                        <input className='update-input'
                        type='text'
                        placeholder='Full Name'
                        name='full_name'
                        // value={this.props.full_name}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input  className='update-input'
                        type='email'
                        placeholder='Email'
                        name='email'
                        // value={this.props.email}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <div>
                        <label>Username:</label>
                        <input  className='update-input'
                        type='text'
                        placeholder='Username'
                        name='username'
                        // value={this.props.username}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <div>
                        <label>Admin:</label>
                        <input className='update-input'
                        type='checkbox'
                        name='admin'
                        // value={this.props.admin}
                        onClick={this.toggleAdmin}
                        />
                    </div>

                    <div className='update-buttons-box'>
                        <Link to='/profileUser'>
                            <button className='update-buttons'>Cancel</button>
                        </Link>
                    

                        <button className='update-buttons' onClick={this.update}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {})(UpdateUser)
import React, { Component } from 'react'

import axios from 'axios'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import './UpdateUser.css'

import {registerUser} from '../../../redux/reducer'



class UpdateUser extends Component {
    constructor(){
        super()

        this.state = {
            full_name: '',
            email: '',
            username: '',
            admin: false
        }
    }

    update = () => {
    
        const {full_name, email, username, admin} = this.state
        const {id} = this.props
        axios.put(`/api/update/${id}`, {full_name, email, username, admin})
            .then(res => {
                this.props.registerUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    delete = () => {
        const {id} = this.props
        console.log(this.props)
        axios.delete(`/api/deleteUser/${id}`)
            .then(res => {
                this.props.history.push('/')
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
                    <div className='input-box'>
                        <label className='label-input'>Full Name:</label>
                        <input className='update-input'
                        type='text'
                        placeholder='Full Name'
                        name='full_name'
                        // value={this.props.full_name}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <div className='input-box'>
                        <label className='label-input'>Email:</label>
                        <input  className='update-input'
                        type='email'
                        placeholder='Email'
                        name='email'
                        // value={this.props.email}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <div className='input-box'>
                        <label className='label-input'>Username:</label>
                        <input  className='update-input'
                        type='text'
                        placeholder='Username'
                        name='username'
                        // value={this.props.username}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <div className='input-box'>
                        <label className='label-input'>Admin:</label>
                        <input className='update-input'
                        type='checkbox'
                        name='admin'
                        // value={this.props.admin}
                        onClick={this.toggleAdmin}
                        />
                    </div>

                    

                    <div className='update-buttons-box'>

                        
                        <button className='update-buttons' onClick={this.delete}>Delete</button>
                        
                        

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

export default connect(mapStateToProps, {registerUser})(UpdateUser)
import React, { Component } from 'react'

import axios from 'axios'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'



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
        const {full_name, email, username, password, admin} = this.props.state
        axios.put('/api/update', {full_name, email, username, password, admin})
            .then(res => {
                
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div>
                <label>Full Name</label>
                <input type='text'
                 placeholder='Full Name'
                 name='full_name'
                 value={this.props.full_name}
                 onChange={(e) => this.handleChange(e)}
                />

                <label>Email</label>
                <input  type='email'
                 placeholder='Email'
                 name='email'
                 value={this.props.email}
                 onChange={(e) => this.handleChange(e)}
                />

                <label>Username</label>
                <input  type='text'
                 placeholder='Username'
                 name='username'
                 value={this.props.username}
                 onChange={(e) => this.handleChange(e)}
                />

                <label>Admin</label>
                <h3>{this.props.admin}</h3>

                <Link to='/profileUser'>
                    <button>Cancel</button>
                </Link>

                <button onClick={this.update}>Update</button>

            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {})(UpdateUser)

import React, { Component } from 'react'

export default class UpdateUser extends Component {
    constructor(){
        super()

        this.state = {
            full_name: '',
            email: '',
            username: '',
            admin: ''
        }
    }

    handleFullNameChange(full_nameVal){
        this.setState({
            full_mame: full_nameVal
        })
    }
    handleEmailChange(emailVal){
        this.setState({
            email: emailVal
        })
    }
    handleUsernameChange(usernameVal){
        this.setState({
            username: usernameVal
        })
    }

    render() {
        return (
            <div>
                <label>Full Name</label>
                <input type='text'
                 placeholder='Full Name'
                 name='full_name'
                 value={this.state.full_mame}
                />

                <label>Email</label>
                <input  type='email'
                 placeholder='Email'
                 name='email'
                 value={this.state.email}
                />

                <label>Username</label>
                <input  type='text'
                 placeholder='Username'
                 name='username'
                 value={this.state.username}
                />

                <label>Admin</label>
                <h3>{this.state.admin}</h3>
            </div>
        )
    }
}

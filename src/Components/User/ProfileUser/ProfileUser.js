import React, { Component } from 'react'
import axios from 'axios'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

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
            <div>

                
                
                <button onClick={this.logout}>
                    Logout
                </button>

                <Link to='/updateUser'>
                    <button>
                        Edit
                    </button>
                </Link>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps, {})(ProfileUser))
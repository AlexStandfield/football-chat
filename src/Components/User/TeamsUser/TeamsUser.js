import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import './TeamsUser.css'

export default class TeamsUser extends Component {
    render() {
        return (
                <div className='posts-box' >
                    <div className='title'>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className='description'>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='posts-buttons-box'>
                        <button className='posts-buttons'>Details</button>
                        <Link to='/chatRooms'>
                            <button className='posts-buttons'>Chat</button>
                        </Link>
                    </div>
                </div>
        )
    }
}

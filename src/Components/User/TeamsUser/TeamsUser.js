import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import {getChatRoomID} from '../../../redux/reducer'

import './TeamsUser.css'

class TeamsUser extends Component {
    render() {
        console.log(this.props.user)
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
                            <button onClick={() => this.props.getChatRoomID(this.props.chat_room_id)} className='posts-buttons'>Chat</button>
                        </Link>
                    </div>
                </div>
        )
    }
}

export default connect(null, {getChatRoomID})(TeamsUser)

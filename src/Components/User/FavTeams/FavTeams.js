import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import './FavTeams.css'

export default class FavTeams extends Component {
    render() {
        return (
            <div className='fav-box'>
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

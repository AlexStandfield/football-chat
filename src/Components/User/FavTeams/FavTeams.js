import React, { Component } from 'react'

export default class FavTeams extends Component {
    render() {
        return (
            <div className='fav-box'>
                <h1>{this.props.name}</h1>
                {this.props.logo}
                {this.props.title}
                {this.props.description}
            </div>
        )
    }
}

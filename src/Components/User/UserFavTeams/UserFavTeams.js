import React, { Component } from 'react'

import {connect} from 'react-redux'

import {getFavorites} from '../../../redux/reducer'

import FavTeams from '../FavTeams/FavTeams'

import './UserFavTeams.css'

import axios from 'axios'

class UserFavTeams extends Component {
    constructor(){
        super()

        this.state={
            favorites: []
        }
    }

    componentDidMount(){
        const {userID} = this.props
        axios.get(`/api/allFavorites/${userID}`)
            .then((res) => {
                this.props.getFavorites(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const favorites = this.state.favorites.map((favorites, i) => {
            return(
                <FavTeams key={i} name={favorites.name} logo={favorites.logo} title={favorites.title} description={favorites.description} />
            )
        })
        return (
            <div className='fav-teams'>
                {favorites}
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {getFavorites})(UserFavTeams)
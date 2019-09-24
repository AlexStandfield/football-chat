import React, {Component} from 'react'

import axios from 'axios'

import './Home.css'

import TeamsUser from '../User/TeamsUser/TeamsUser'

import {connect} from 'react-redux'

import {getPosts} from '../../redux/postsReducer'

class Home extends Component {
    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.getPosts()
    }

    getPosts = () => {
        axios.get('/api/allPosts')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render(){
        console.log(this.props.user)
        const mappedPosts = this.state.posts.map((posts, i) => {
            return (
                <TeamsUser key={i} id={posts.id} chat_room_id={posts.chat_room_id} teamID={posts.teamID} title={posts.title} description={posts.description} />
            )
        })
        return(
            <div className='display-posts'>
                {mappedPosts}
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {getPosts})(Home)
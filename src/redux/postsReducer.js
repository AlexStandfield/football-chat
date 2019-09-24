const initialState = {
    id: null,
    teamid: null,
    title: '',
    description: '',
    posts: []
}

const GET_POSTS = 'GET_POSTS'

export function getPosts(data){
    return {
        type: GET_POSTS,
        payload: data
    }
}

export default function postsReducer(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            const {
                id,
                teamid,
                title,
                description
            } = action.payload
            return {
                ...state,
                id,
                teamid,
                title,
                description
            }
        default:
            return state
    }
}
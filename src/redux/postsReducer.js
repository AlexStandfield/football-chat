const initialState = {
    id: null,
    teamID: null,
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
                teamID,
                title,
                description
            } = action.payload
            return {
                ...state,
                id,
                teamID,
                title,
                description
            }
        default:
            return state
    }
}
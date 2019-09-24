const initialState = {
    id: null,
    full_name: '',
    email: '',
    username: '',
    password: '',
    admin: false,
    favorites: [],
    chat_room_id: null
}

const REGISTER_USER = 'REGISTER_USER'
const GET_FAVORITES = 'GET_FAVORITES'
const GET_CHAT_ROOM_ID = 'GET_CHAT_ROOM_ID'

export function registerUser(data) {
    return {
        type: REGISTER_USER,
        payload: data
    }
}

export function getFavorites(favorites){
    return{
        type: GET_FAVORITES,
        payload: favorites
    }
}

export function getChatRoomID(id){
    return{
        type: GET_CHAT_ROOM_ID,
        payload: id
    }
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case REGISTER_USER:
            const {
                id,
                full_name,
                email,
                username,
                admin
            } = action.payload
            return {
                ...state,
                id,
                full_name,
                email,
                username,
                admin
            }
        case GET_FAVORITES:
            return{...state, favorites: action.payload}
        case GET_CHAT_ROOM_ID:
            return{...state, chat_room_id: action.payload}
        default:
            return state
    }
}
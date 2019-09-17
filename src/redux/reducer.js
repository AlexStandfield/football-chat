const initialState = {
    full_name: '',
    email: '',
    username: '',
    password: '',
    admin: false
}

const REGISTER_USER = 'REGISTER_USER'

export function registerUser(data) {
    return {
        type: REGISTER_USER,
        payload: data
    }
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case REGISTER_USER:
            const {
                full_name,
                email,
                username,
                admin
            } = action.payload
            return {
                ...state,
                full_name,
                email,
                username,
                admin
            }
        default:
            return state
    }
}
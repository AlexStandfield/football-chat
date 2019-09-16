const initialState = {
    full_name: '',
    email: '',
    username: '',
    password: '',
    admin: false
}

export default function reducer (state = initialState, action){
    const {payload} = action
    switch(action.type){
        default:
            return state
    }
}
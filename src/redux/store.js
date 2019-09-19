import {createStore, applyMiddleware, combineReducers} from 'redux'
import promisedMiddleware from 'redux-promise-middleware'

import reducer from './reducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
    reducer,
    postsReducer
})

export default createStore(rootReducer, applyMiddleware (promisedMiddleware))
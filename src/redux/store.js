import {createStore, combineReducers } from 'redux'
import pizzaReducer from './pizza/pizzaReducer'
import userReducer from './user/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
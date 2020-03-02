import {applyMiddleware, createStore} from 'redux'
import dataService from './middlewares/api'

import { messageReducer} from './reducers/entities/reducer'
const initialState = {
	inputValue:'',
	messages: []
}
export default createStore(
	messageReducer, initialState, applyMiddleware(dataService)
)


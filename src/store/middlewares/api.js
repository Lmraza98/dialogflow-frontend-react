import axios from 'axios'
import { MESSAGE_RECEIVED, SEND_MESSAGE } from '../reducers/entities/types'
import { getTime } from '../../helper'
const API_ENDPOINT = 'http://localhost:3005/chatbot/dialogflow/detectintent'

const dataService = store => next => action => {
	const message  = action.message
	/*
    Pass all actions through by default
    */
	console.log(JSON.stringify(action))
	switch (action.type) {
	case SEND_MESSAGE:
		next(action)
		console.log(MESSAGE_RECEIVED)
		axios.post(API_ENDPOINT, message)
			.then( response => {
				response = response.data[0].queryResult.fulfillmentMessages
				response.forEach( (message, index) => {
					if(index === 0)
					{
						const time = getTime()

						response = {
							text: message.text.text[0],
							first: true,
							type: 'bot',
							time: time
						}
						store.dispatch({
							type: MESSAGE_RECEIVED,
							response
						})
					}else{
						console.log( MESSAGE_RECEIVED + JSON.stringify(message))
						response = {
							text: message.text.text[0],
							type: 'bot'
						}
						store.dispatch({
							type: MESSAGE_RECEIVED,
							response
						})
					}
				})
			})
			.catch(err => {
				let response = {
					text: 'Sorry, we encountered a problem. Please try again',
					type: 'bot'
				}
				store.dispatch({
					type: MESSAGE_RECEIVED,
					response
				})
				console.log(err)
			})
		break

	default:
		console.log('default')
		next(action)
	}
}

export default dataService
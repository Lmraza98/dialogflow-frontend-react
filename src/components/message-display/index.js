import React from 'react'
import './index.css'
import Messages from './messages/Messages.js'
class MessageDisplay extends React.Component {
    render() {
        return (
            <div className={'message-display'}>
                <Messages/>
            </div>
        )
    }
}
export default MessageDisplay
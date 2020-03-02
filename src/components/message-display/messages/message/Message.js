import React from 'react'
import './Message.css'
import bot from './assets/robot-head.png'
import user from './assets/user-head.png'
import PropTypes from 'prop-types'

class Message extends React.Component {
    constructor(props) {
        super(props)
    }
    renderUserWithAvi = () => {
        console.log(JSON.stringify(this.props))
        return (
            <div className={'message-container-user'}>
                <div className={'display-time'}>
                    <div className={'time'}>
                        {this.props.message.time}
                    </div>
                    <img className={'avi-circle-user'} src={user} alt={'user'}/>
                </div>
                <div className={'message-user'}>
                    {this.props.message.text}
                </div>
            </div>
        )
    }
    renderBotWithAvi = () => {
        return (
            <div className={'message-container-bot'}>
                <div className={'message-bot'}>
                    {this.props.message.text}
                </div>
                <div className={'display-time'}>
                    <img className={'avi-circle-bot'} src={bot} alt={'bot'}/>
                    <div className={'time'}>
                        {this.props.message.time}
                    </div>
                </div>

            </div>
        )
    }
    renderUser = () => {
        return (
            <div className={'message-container-user'}>
                <div className={'avi-circle-user'}/>
                <div className={'message-user'}>
                    {this.props.message.text}
                </div>
            </div>
        )
    }
    renderBot = () => {
        console.log(JSON.stringify(this.props))
        return (
            <div className={'message-container-bot'}>
                <div className={'message-bot'}>
                    {this.props.message.text}
                </div>
                <div className={'avi-circle-empty'}/>
            </div>

        )
    }
    render() {
        let message
        if(this.props.message.type === 'user') {
            message = this.renderUserWithAvi()
        } else {
            if(this.props.avi) {
                message = this.renderBotWithAvi()
            }else{
                message = this.renderBot()
            }
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}
Message.propTypes = {
    message: PropTypes.object,
    avi: PropTypes.bool
}
export default Message
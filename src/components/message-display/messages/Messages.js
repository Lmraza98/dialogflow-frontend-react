import './Messages.css'
import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getMessages } from '../../../store/reducers/entities/selectors'

import Message from '../messages/message/Message'
class Messages extends React.Component {
    constructor(props) {
        super(props)
    }

    messages = () => {
        let messages =  [...this.props.messages].reverse()

        if(messages.length!==0)
        {
            console.log('Messages before reverse: ' + JSON.stringify(messages))
            //console.log('Messages after reverse: ' + JSON.stringify(messages))
            return messages.map( (message, index) => {
                if(message.first) {
                    return <Message key={index} message={message} avi={true}/>
                }else{
                    return <Message key={index} message={message}/>
                }
            })
        }
    }

    render() {
        return (
            <div className={'messages'}>
                {
                    this.messages()
                }
            </div>
        )
    }
}
Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
    messages: getMessages(state)
})
export default connect(
    mapStateToProps
)(Messages)
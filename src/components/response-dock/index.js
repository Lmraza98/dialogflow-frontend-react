import './index.css'
import React from 'react'
import PropTypes from 'prop-types'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux'
import { sendMessage, updateInputValue } from '../../store/reducers/entities/actions'
import { getInputValue } from '../../store/reducers/entities/selectors'
class ResponseDock extends React.Component {
    handleChange = (event) => {
        const message = event.target.value
        console.log('handleChange: ' + message)
        this.props.updateInputValue(message)
    }
    handleSubmit = (e) => {
        if(e.clickEvent || e.charCode === 13) {
            if(this.props.inputValue)
            {
                console.log(e.clickEvent)
                console.log('handle click called')
                this.props.sendMessage(this.props.inputValue)
                this.props.updateInputValue('')
            }
        }
    }
    handleClick = (e) => {
        if(this.props.inputValue)
        {
            console.log(e.clickEvent)
            console.log('handle click called')
            this.props.sendMessage(this.props.inputValue)
            this.props.updateInputValue('')
        }
    }

    render() {
        return (
            <div className={'response-dock'}>
                <InputGroup>
                    <FormControl onKeyPress={this.handleSubmit} onChange={this.handleChange} value={this.props.inputValue} bsPrefix={'input'}
                                 placeholder="Type message here..."
                    />
                    <InputGroup.Append>
                        <Button onKeyPress={this.handleSubmit} onClick={this.handleClick.bind(this)} variant={'send'}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}
ResponseDock.propTypes = {
    inputValue: PropTypes.string,
    updateInputValue: PropTypes.func,
    sendMessage: PropTypes.func
}
const mapStateToProps = state => ({
    inputValue: getInputValue(state)
})
const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message)),
        updateInputValue: (message) => dispatch(updateInputValue(message))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponseDock)
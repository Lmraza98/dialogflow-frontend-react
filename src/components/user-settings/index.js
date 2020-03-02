import React from 'react'
import './index.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'
import profile from './assets/profile_png.png'
const profileImg = <img className={"profile-img"} src={profile}/>

class UserSettings extends React.Component {

    render() {
        return(
            <div className="user-settings">
                <DropdownButton bsPrefix={'dropdown-user-settings'} title={profileImg}>
                    <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}
export default UserSettings
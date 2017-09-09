import React, {Component} from 'react'
import Logo from '../assets/img/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header-logo" src={Logo} alt="LP2"/>
        <h2>Programming Laboratory II</h2>
      </div>
    )
  }
}

export default Header
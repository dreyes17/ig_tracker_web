import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Text } from 'react-native';
import Icon from '../assets/icon-blank.png'
import PlayStore from './PlayStore'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper z-depth-0" >
      <div>
        <Link className="brand-logo" to="/"><img src={Icon} alt="Ig Tracker logo"/> <Text>  IG Tracker</Text> </Link>
        <Link className="sidenav-trigger" data-target="mobile-links" to="">
          <i className="large material-icons">menu</i>
        </Link>
        <ul className="right hide-on-med-and-down">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </div>
      <ul className="sidenav" id="mobile-links">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </nav> 
  )
}

export default withRouter(Navbar)

/*<ul className="brand-logo center">
          <li><PlayStore /></li>
        </ul>*/
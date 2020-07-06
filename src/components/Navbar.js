import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Text } from 'react-native';
import Icon from '../assets/icon-blank.png'
import M from "materialize-css";

class Navbar extends Component {

  componentDidMount(){
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <nav className="nav-wrapper z-depth-1" >
        <div>
          <Link className="brand-logo" to="/"><img className="z-depth-4 hoverable" src={Icon} alt="Ig Tracker logo"/> <Text>  IG Tracker</Text> </Link>
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
}

export default withRouter(Navbar)

/*<ul className="brand-logo center">
          <li><PlayStore /></li>
        </ul>*/
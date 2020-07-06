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
      <>
        <nav className="nav-wrapper z-depth-1 hide-on-med-and-down show-on-large" >
          <div>
            <Link className="brand-logo" to="/"><img className="z-depth-4 hoverable" src={Icon} alt="Ig Tracker logo"/> <Text>  IG Tracker</Text> </Link>
          </div>
        </nav> 
        <nav id="mobile-nav" className="nav-wrapper z-depth-1 show-on-medium-and-down hide-on-large-only" >
          <div>
            <Link className="brand-logo cneter" to="/"><img className="z-depth-4 hoverable" src={Icon} alt="Ig Tracker logo"/> <Text>  IG Tracker</Text> </Link>
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(Navbar)

/*<ul className="brand-logo center">
          <li><PlayStore /></li>
        </ul>*/
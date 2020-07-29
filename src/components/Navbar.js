import React, { Component } from 'react'
import Icon from '../assets/icon-blank.png'

class Navbar extends Component {

  componentDidMount(){
    const M = require("materialize-css");
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <>
        <nav className="nav-wrapper z-depth-1 hide-on-med-and-down show-on-large" >
        <div className="brand-logo row">
          <div className="col s2">
            <img className=" z-depth-4" src={Icon} alt="Ig Tracker logo"/>
          </div>
          <div className="col s10">
            <h1>IG Tracker</h1>
          </div>
             
        </div>
        </nav> 
        <nav id="mobile-nav" className="nav-wrapper z-depth-1 show-on-medium-and-down hide-on-large-only" >
          <div className="brand-logo center row">
            <div className="col s2">
              <img className=" z-depth-4" src={Icon} alt="Ig Tracker logo"/>
            </div>
            <div className="col s10">
              <h1>IG Tracker</h1>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
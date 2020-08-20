import React, { Component } from 'react'
import Icon from '../assets/icon-blank.jpg'
import PlayStore from "./PlayStore"

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
          <div className="brand-logo left row">
            <div className="col s3">
              <img className=" z-depth-4" src={Icon} alt="Ig Tracker logo"/>
            </div>
            <div className="col s7" style={{width: "70%"}}>
              <h1>IG Tracker</h1>
            </div>
            <div className="col s1 right " style={{paddingRight: "0", paddingLeft: "0", width:"0"}}>
              <PlayStore />
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
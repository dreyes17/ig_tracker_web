import React, { Component } from 'react'
import CapturesCarousel from './CapturesCarousel'
import PromotionTable from './PromotionTable'
import Footer from './Footer'

class Home extends Component {

  render(){
    
    return (
      <div className="home">
        <CapturesCarousel locale={this.props.locale}/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <PromotionTable locale={this.props.locale}/>
        <Footer locale={this.props.locale}/>
      </div>
    );
  }
}


export default Home
import React, { Component } from 'react'
import CapturesCarousel from './CapturesCarousel'
import PlayStore from './PlayStore'
import PromotionTable from './PromotionTable'

class Home extends Component {

  render(){
    
    return (
      <div>
        <div className="row">
          <div className="container center">
              <PlayStore />
          </div>
        </div>
        <CapturesCarousel />
        <PromotionTable />
      </div>
    );
  }
}


export default Home
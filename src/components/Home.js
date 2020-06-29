import React, { Component } from 'react'
import CaptureCard from './CaptureCard'
import PlayStore from './PlayStore'

class Home extends Component {

  render(){
    
    return (
      <div>
        <div>
          <PlayStore />
        </div>
        <div className="card-list">
          
          <CaptureCard />
      </div>
      </div>
      
    )
  }
}


export default Home
import React, { Component } from 'react'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
// Import Materialize
import M from "materialize-css";

class CaptureCard extends Component {

  componentDidMount(){
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
  }

  render() {
      return (
        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src={Card1} alt=""/></a>
          <a className="carousel-item" href="#two!"><img src={Card2} alt=""/></a>
          <a className="carousel-item" href="#three!"><img src={Card3} alt=""/></a>
        </div>
      )
  }
}

export default CaptureCard
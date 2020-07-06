import React, { Component } from 'react'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card4 from '../assets/cambio_privacidad.jpg'
import Card5 from '../assets/vista_aplicacion.jpg'
import DescriptionText from "./DescriptionText"
// Import Materialize
import M from "materialize-css";

class CapturesCarousel extends Component {

  componentDidMount(){
    var carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {"numVisible": 5, "shift": 10, "duration":125,"onCycleTo":this._onCarouselChange});
    var materialBoxed = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialBoxed, {});
    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, {"onShow":this._onTabChange}); 

  }

  _onTabChange(e) {
    var carousel = document.querySelectorAll('.carousel');
    var carousel_instance = M.Carousel.getInstance(carousel[0]);
  
    var carousel_center = null;
    var i = 0;
    carousel_instance.images.forEach(element => {
      if(element.className === "carousel-item active") {
        carousel_center = i;
        return;
      }
      i += 1
    });
    if (this.index !== carousel_center) {
      carousel_instance.set(this.index);
    }
  }

  _onCarouselChange(e) {
    var tabs = document.querySelectorAll('.tabs');
    var tab_instance = M.Tabs.getInstance(tabs[0]);
    var carousel_center = null;
    var i = 0;
    this.images.forEach(element => {
      if(element.className === "carousel-item active") {
        carousel_center = i;
        return;
      }
      i += 1
    });
    if (tab_instance != null && tab_instance.index !== carousel_center) {
      tab_instance.select((carousel_center + 1).toString());
    }
  }

  render() {
      return (
        <div className="row z-depth-1">
          <div className="col s5 offset-s1">
            <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width tab-demo">
                <li className="tab col s4"><a className="active waves-effect" href="#1">IG Tracker</a></li>
                <li className="tab col s4"><a className="waves-effect" href="#2">Monitoriza Seguidores</a></li>
                <li className="tab col s4"><a className="waves-effect" href="#3">Sé Anónimo</a></li>
            </ul>
            <div id="1" className="col s12"><DescriptionText title={TITULO_PRESENTACION} desc={DESC_PRESENTACION} /></div>
            <div id="2" className="col s12"><DescriptionText title={TITULO_MONITORIZA} desc={DESC_MONITORIZA} /></div>
            <div id="3" className="col s12"><DescriptionText title={TITULO_ANONIMO} desc={DESC_ANONIMO} /></div>
          </div>
          <div className="col s6">
            <div className="carousel">
              <a className="carousel-item" href="#one!"><img className="materialboxed z-depth-3" src={Card1} alt=""/></a>
              <a className="carousel-item" href="#two!"><img className="materialboxed z-depth-3" src={Card2} alt=""/></a>
              <a className="carousel-item" href="#three!"><img className="materialboxed z-depth-3" src={Card3} alt=""/></a>
              <a className="carousel-item" href="#four!"><img className="materialboxed z-depth-3" src={Card4} alt=""/></a>
              <a className="carousel-item" href="#five!"><img className="materialboxed z-depth-3" src={Card5} alt=""/></a>
            </div>
          </div>
        </div>
      )
  }
}

export default CapturesCarousel

const TITULO_PRESENTACION = "IG Tracker";
const DESC_PRESENTACION = "Descubre la popularidad real de un perfil de Instagram y además ¡descárgate sus publicaciones!";

const TITULO_ANONIMO = "Sé anónimo";
const DESC_ANONIMO = "No te pediremos tu email ni ninguna contraseña. Tú solamente descárgate la app y empieza a usarla. Así nadie se entera que sigues su Instagram.";

const TITULO_MONITORIZA = "Monitoriza seguidores";
const DESC_MONITORIZA = "Sé el primero en enterarte de cuándo un perfil sube o baja mucho de seguidores. Puedes ver el número exacto de seguidores de cualquier perfil en cualquier momento.";

import React, { Component } from 'react'
import DescriptionText from "./DescriptionText"
import captures from "./Captures"

class CapturesCarousel extends Component {

  componentDidMount() {
    //Import here materialize-css because it uses window variable
    const M = require("materialize-css");
    var carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {"numVisible": 5, "shift": 10, "duration":125,"onCycleTo":(e) => this._onCarouselChange(e, M)});
    var materialBoxed = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialBoxed);
    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, {"onShow":(e) => this._onTabChange(e, M)}); 
    window.addEventListener("resize", () => this._updateDimensions(M));
    
  }

  _onTabChange(e, M) {
    var index = parseInt(e.id.substring(e.id.length-1), 10) - 1 ;
    var type = e.id.substring(0, e.id.length-2);
    var carousel = document.querySelectorAll('.carousel');
    var carousel_instance = null;
    console.log(type);
    if(type === "mob") {//mobile
      carousel_instance= M.Carousel.getInstance(carousel[1]);
    } else {
      carousel_instance = M.Carousel.getInstance(carousel[0]);
    }
    console.log(carousel_instance);
    console.log(index);
    var carousel_center = null;
    var i = 0;
    carousel_instance.images.forEach(element => {
      if(element.className === "carousel-item active") {
        carousel_center = i;
        return;
      }
      i += 1
    });
    if (index !== carousel_center) {
      carousel_instance.set(index);
    }
  }

  _onCarouselChange(e, M) {
    var index = parseInt(e.id.substring(e.id.length-1), 10) - 1 ;
    var type = e.id.substring(0, e.id.length-1);
    var tabs = document.querySelectorAll('.tabs');
    var tab_instance = null;
    if(type === "mobile-carousel-item") {
      tab_instance= M.Tabs.getInstance(tabs[1]);
    } else {
      tab_instance = M.Tabs.getInstance(tabs[0]);
    }
    //no se ha podido usar el method select() de materializeCSS porque no funcionaba con el edge
    if (tab_instance != null && tab_instance.index !== index && tab_instance.el.children.length-1 > index) {
        tab_instance.el.children[index].firstElementChild.click();
    }
  }

  _updateDimensions(M) {
    var carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {"numVisible": 5, "shift": 10, "duration":125,"onCycleTo":(e) => this._onCarouselChange(e,M)});
  }

  _onClick(e) {
    e.preventDefault();
  }

  render() {
      return (
        <>
          <div className="capturesCarousel row hide-on-med-and-down show-on-large">
            <div className="col s5 offset-s1">
              <ul className="tabs tabs-fixed-width tab-demo">
                  <li id="desktop-tab1" className="tab col s2"><a className="active waves-effect" href="#1"><i className="small material-icons">home</i></a></li>
                  <li id="desktop-tab2" className="tab col s2"><a className="waves-effect" href="#2"><i className="small material-icons">search</i></a></li>
                  <li id="desktop-tab3" className="tab col s2"><a className="waves-effect" href="#3"><i className="small material-icons">photo_library</i></a></li>
                  <li id="desktop-tab4" className="tab col s2"><a className="waves-effect" href="#4"><i className="small material-icons">file_download</i></a></li>
                  <li id="desktop-tab5" className="tab col s2"><a className="waves-effect" href="#5"><i className="small material-icons">lock</i></a></li>
                  <li id="desktop-tab6" className="tab col s2"><a className="waves-effect" href="#6"><i className="small material-icons">notifications</i></a></li>
              </ul>
              <div id="1" className="col s12 no-scroll"><DescriptionText locale={this.props.locale} title={'presentation-title'} desc={'presentation-desc'} /></div>
              <div id="2" className="col s12 no-scroll"><DescriptionText locale={this.props.locale} title={'track-title'} desc={'track-desc'} /></div>
              <div id="3" className="col s12 no-scroll"><DescriptionText locale={this.props.locale} title={'display-content-title'} desc={'display-content-desc'}/></div>
              <div id="4" className="col s12 no-scroll"><DescriptionText locale={this.props.locale} title={'download-title'} desc={'download-desc'} /></div>
              <div id="5" className="col s12 no-scroll"><DescriptionText locale={this.props.locale} title={'anonymous-title'} desc={'anonymous-desc'} /></div>
              <div id="6" className="col s12 no-scroll"><DescriptionText locale={this.props.locale} title={'notify-title'} desc={'notify-desc'} /></div>
            </div>
            <div className="col s6">
              <div className="carousel">
                <a id="desktop-carousel-item1" className="carousel-item" href onClick={this._onClick} aria-label="1"><img className="materialboxed z-depth-2" src={captures[this.props.locale][0]} alt=""/></a>
                <a id="desktop-carousel-item2" className="carousel-item" href onClick={this._onClick} aria-label="2"><img className="materialboxed z-depth-2" src={captures[this.props.locale][1]} alt=""/></a>
                <a id="desktop-carousel-item3" className="carousel-item" href onClick={this._onClick} aria-label="3"><img className="materialboxed z-depth-2" src={captures[this.props.locale][2]} alt=""/></a>
                <a id="desktop-carousel-item4" className="carousel-item" href onClick={this._onClick} aria-label="4"><img className="materialboxed z-depth-2" src={captures[this.props.locale][3]} alt=""/></a>
                <a id="desktop-carousel-item5" className="carousel-item" href onClick={this._onClick} aria-label="5"><img className="materialboxed z-depth-2" src={captures[this.props.locale][4]} alt=""/></a>
                <a id="desktop-carousel-item6" className="carousel-item" href onClick={this._onClick} aria-label="6"><img className="materialboxed z-depth-2" src={captures[this.props.locale][5]} alt=""/></a>
              </div>
            </div>
          </div>
          <div id="mobile-capturesCarousel" className="capturesCarousel row show-on-medium-and-down hide-on-large-only">
            <div className="col s12" style={{zIndex: 2}}>
              <div id="mobile-carousel" className="carousel">
                <a id="mobile-carousel-item1" className="carousel-item" href onClick={this._onClick} aria-label="1"><img className="z-depth-2" src={captures[this.props.locale][0]} alt=""/></a>
                <a id="mobile-carousel-item2" className="carousel-item" href onClick={this._onClick} aria-label="2"><img className="z-depth-2" src={captures[this.props.locale][1]} alt=""/></a>
                <a id="mobile-carousel-item3" className="carousel-item" href onClick={this._onClick} aria-label="3"><img className="z-depth-2" src={captures[this.props.locale][2]} alt=""/></a>
                <a id="mobile-carousel-item4" className="carousel-item" href onClick={this._onClick} aria-label="4"><img className="z-depth-2" src={captures[this.props.locale][3]} alt=""/></a>
                <a id="mobile-carousel-item5" className="carousel-item" href onClick={this._onClick} aria-label="5"><img className="z-depth-2" src={captures[this.props.locale][4]} alt=""/></a>
                <a id="mobile-carousel-item6" className="carousel-item" href onClick={this._onClick} aria-label="6"><img className="z-depth-2" src={captures[this.props.locale][5]} alt=""/></a>
              </div>
            </div>
            <div id="mobile-descriptions" className="col s12 offset-s1">
              <ul id="mobile-tabs" className="tabs tabs-fixed-width tab-demo">
                  <li id="mobile-tab1" className="tab col s2"><a className="active waves-effect" href="#mob-1"><i className="small material-icons">home</i></a></li>
                  <li id="mobile-tab2" className="tab col s2"><a className="waves-effect" href="#mob-2"><i className="small material-icons">search</i></a></li>
                  <li id="mobile-tab3" className="tab col s2"><a className="waves-effect" href="#mob-3"><i className="small material-icons">photo_library</i></a></li>
                  <li id="mobile-tab4" className="tab col s2"><a className="waves-effect" href="#mob-4"><i className="small material-icons">file_download</i></a></li>
                  <li id="mobile-tab5" className="tab col s2"><a className="waves-effect" href="#mob-5"><i className="small material-icons">lock</i></a></li>
                  <li id="mobile-tab6" className="tab col s2"><a className="waves-effect" href="#mob-6"><i className="small material-icons">notifications</i></a></li>
              </ul>
              <div id="mob-1" className="col s12"><DescriptionText locale={this.props.locale} title={'presentation-title'} desc={'presentation-desc'} /></div>
              <div id="mob-2" className="col s12"><DescriptionText locale={this.props.locale} title={'track-title'} desc={'track-desc'} /></div>
              <div id="mob-3" className="col s12"><DescriptionText locale={this.props.locale} title={'display-content-title'} desc={'display-content-desc'} /></div>
              <div id="mob-4" className="col s12"><DescriptionText locale={this.props.locale} title={'download-title'} desc={'download-desc'} /></div>
              <div id="mob-5" className="col s12"><DescriptionText locale={this.props.locale} title={'anonymous-title'} desc={'anonymous-desc'} /></div>
              <div id="mob-6" className="col s12"><DescriptionText locale={this.props.locale} title={'notify-title'} desc={'notify-desc'} /></div>
            </div>
          </div>
        </>
      )
  }
}
          
export default CapturesCarousel


import React from 'react';
import Vakma from '../assets/vakma.png'
import { SocialIcon } from 'react-social-icons'
import { I18nProvider } from '../i18nProvider';
import translate from '../i18nProvider/translate';

const Footer = (props) => { 
    return (
      <I18nProvider locale={props.locale}>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h4 className="black-text">{translate('vacama-product')}</h4>
                <img src={Vakma} alt="Ig Tracker logo"/>
              </div>
              <div className="col l5 offset-l1  s12">
                <h4 className="black-text">{translate('contact')}</h4>
                <div className="row hide-on-med-and-down show-on-large">
                  <div className="col s2" >
                    <SocialIcon  url="https://www.instagram.com/vacamacompany/" rel="nofollow" network='instagram' bgColor="black" target="_blank" style={{ height: "3vmax", width: "3vmax"}}/>
                  </div>
                  <div className="col s10">
                    <p id="footerContactDescription">{translate('follow-us')}</p>
                  </div>
                  <div className="col s2">
                    <SocialIcon network='email' bgColor="#B91919" style={{ height: "3vmax", width: "3vmax" }}/>
                  </div>
                  <div className="col s10">
                    <p id="footerContactDescription">vacamacompany@gmail.com</p>
                  </div>
                </div>
                <div className="row show-on-medium-and-down hide-on-large-only">
                  <div className="col s1" >
                    <SocialIcon  url="https://www.instagram.com/vacamacompany/" rel="nofollow" network='instagram' bgColor="black" target="_blank" style={{ height: "3vmax", width: "3vmax" }}/>
                  </div>
                  <div className="col s11">
                    <p id="footerContactDescription">{translate('follow-us')}</p>
                  </div>
                  <div className="col s1">
                    <SocialIcon network='email' bgColor="#B91919" style={{ height: "3vmax", width: "3vmax" }}/>
                  </div>
                  <div className="col s11">
                    <p id="footerContactDescription">vacamacompany@gmail.com</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Vacama Company 
            <a className="grey-text text-lighten-4 right" href="#!">{translate('privacy-policy')}</a>
            </div>
          </div>
        </footer>
      </I18nProvider>
    );
}

export default Footer;
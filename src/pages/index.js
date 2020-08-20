import React from 'react';
import './index.css';
import App from '../components/App';
import Seo from '../components/Seo'
import ReactGa from 'react-ga';
import { LOCALES } from '../i18nProvider/constants';

//Initialize Google Analytics and report the page view
ReactGa.initialize('UA-172753539-1');
ReactGa.pageview("/en");

const IndexPage = () => (
  
    <div>
      <Seo locale={LOCALES.ENGLISH}/>
      <App locale={LOCALES.ENGLISH}/>
    </div>
)


export default IndexPage
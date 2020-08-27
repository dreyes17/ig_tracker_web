/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { LOCALES } from '../i18nProvider/constants';


const en_MetaData = {
  'title': 'IG Tracker | The App to track Instagram Profiles 📱😍✅',
  'description':'🥇 An app to analyze Instagram Profiles and Download Publications and Profile Photos without authentication.',
  'url':'https://igtracker.app/',
  'highLightImage':'https://igtracker.app/static/HighlightDisplay-a15e8d274f6896238ea4a649f11e1113.webp'
};

const es_MetaData = {
  'title': 'IG Tracker | La App para monitorizar perfiles de Instagram 📱😍✅',
  'description':'🥇 Una app para analizar Perfiles de Instagram y Descargar Publicaciones y Fotos de Perfil sin autenticarse.',
  'url':'https://igtracker.app/es/',
  'highLightImage':'https://igtracker.app/static/HighlightDisplay-a15e8d274f6896238ea4a649f11e1113.webp'
};


function SEO(props) {
  var metaData;
  if(props.locale === LOCALES.SPANISH) {
    metaData = es_MetaData;
    console.log("es");
  }
  else {
    metaData = en_MetaData;
    console.log("en");
  }

  return (
    <Helmet>
      <title>{metaData['title']}</title>
      <htmlAttributes lang={props.locale} />
      <link rel="alternate" hreflang="en"
        href="http://igtracker.app/" />
      <link rel="alternate" hreflang="es"
        href="http://igtracker.app/es/" />
      <link rel="icon" type="image/x-icon"
        href="http://igtracker.app/icon-transparent.ico" />
      <meta name="robots" content="index,follow" />
      <meta name="og:title" content={metaData['title']} />
      <meta name="description" content={metaData['description']} />
      <meta name="og:description" content={metaData['description']} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaData['url']} />
      <meta property="og:site_name" content={metaData['title']} />
      <meta property="og:image" content="https://igtracker.app/static/icon-blank-bbd86f4ed4b11acecc49b5b6b4175ff1.webp"/>
      <meta property="og:image:secure_url" content="https://igtracker.app/static/icon-blank-bbd86f4ed4b11acecc49b5b6b4175ff1.webp"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:title" content={metaData['title']}/>
      <meta property="twitter:description" content={metaData['description']}/>
      <meta property="twitter:image" content={metaData['highLightImage']}/>
      <meta property="lang" content={props.locale}/>
      <meta name="theme-color" content="#ee77a7"/>
    </Helmet>
  );
}

export default SEO

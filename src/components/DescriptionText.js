import React from 'react'

const DescriptionText = (props) => {
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.vacamacomp.ig_tracker';
    return (
        <div className="descriptionText">
            <h1>{props.title}</h1>
            <p className="flow-text">{props.desc}</p>
            <a class="waves-effect waves-light btn-large pulse" href={androidUrl} target="_blank" rel="noopener noreferrer"><i class="material-icons left">file_download</i>Descargar</a>
        </div>
    )
  }
  
  export default DescriptionText;
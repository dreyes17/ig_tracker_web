import React from 'react'
import PlayStore from "./PlayStore"
import { I18nProvider } from '../i18nProvider';
import translate from '../i18nProvider/translate'

const DescriptionText = (props) => {
    return (
        <I18nProvider locale={props.locale}>
            <div className="descriptionText caption center-align">
                <h1>{translate(props.title)}</h1>
                <p className="flow-text">{translate(props.desc)}</p>
                <PlayStore />
            </div>
        </I18nProvider>
        
    )
  }
  
  export default DescriptionText;
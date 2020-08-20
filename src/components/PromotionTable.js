import React from 'react'
import { I18nProvider } from '../i18nProvider';
import translate from '../i18nProvider/translate';

const PromotionTable = (props) => {
    return ( 
        <I18nProvider locale={props.locale}>
            <div className="promotionTable row hide-on-med-and-down show-on-large">

                <div className="col s2 offset-s3 center-align">
                    <div className="col s12">
                        <i className="medium material-icons center-align">account_circle</i>
                    </div>
                    <div className="col s12">
                        <p>{translate('find-profiles')}</p>
                    </div>
                </div>
                <div className="col s2 center-align">
                    <div className="col s12">
                        <i className="medium material-icons">adb</i>
                    </div>
                    <div className="col s12">
                        <p>{translate('available-android')}</p>
                    </div>
                </div>
                <div className="col s2 center-align">
                    <div className="col s12">
                        <i className="medium material-icons">notifications_active</i>
                    </div>
                    <div className="col s12">
                        <p>{translate('notify-changes')}</p>
                    </div>
                </div>

            </div>
            <div className="promotionTable row show-on-medium-and-down hide-on-large-only">

                <div className="col s4 center-align">
                    <div className="col s12">
                        <i className="medium material-icons center-align">account_circle</i>
                    </div>
                    <div className="col s12 center">
                        <p>{translate('find-profiles')}</p>
                    </div>
                </div>
                <div className="col s4 center-align">
                    <div className="col s12 ">
                        <i className="medium material-icons">adb</i>
                    </div>
                    <div className="col s12 center">
                        <p>{translate('available-android')}</p>
                    </div>
                </div>
                <div className="col s4 center-align">
                    <div className="col s12 center">
                        <i className="medium material-icons">notifications_active</i>
                    </div>
                    <div className="col s12">
                        <p>{translate('notify-changes')}</p>
                    </div>
                </div>

            </div>
        </I18nProvider>
    )
  }
  
  export default PromotionTable;
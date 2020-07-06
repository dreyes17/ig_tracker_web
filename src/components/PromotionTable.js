import React from 'react'

const PromotionTable = (props) => {
    return (
        <div className="promotionTable row">

            <div className="col s2 offset-s3 center-align">
                <div className="col s12">
                    <i className="large material-icons center-align">account_circle</i>
                </div>
                <div className="col s12">
                    <p>Encuentra Perfiles</p>
                </div>
            </div>
            <div className="col s2 center-align">
                <div className="col s12">
                    <i className="large material-icons">adb</i>
                </div>
                <div className="col s12">
                    <p>Disponible en Android</p>
                </div>
            </div>
            <div className="col s2 center-align">
                <div className="col s12">
                    <i className="large material-icons">notifications_active</i>
                </div>
                <div className="col s12">
                    <p>Notifica Cambios</p>
                </div>
            </div>

        </div>
    )
  }
  
  export default PromotionTable;
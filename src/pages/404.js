import React from "react"
import Navbar from '../components/Navbar'

const NotFoundPage = () => (
  <>
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="row center">
      <div className="col s12">
        <h1 style={{color: "white", fontSize: "8vmax"}}>404: PAGE NOT FOUND</h1>
      </div>
      <div className="col s12">
        <p style={{color: "white", fontSize: "2vmax"}} >You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </>
)

export default NotFoundPage

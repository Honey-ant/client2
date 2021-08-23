import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import logo from "../../";
// var Logo = require("../../")
var


class Landing extends Component {
    render() {
      return (
       
            <div className="container-fluid cards">
                <div className="card">
                    <div className="card-header">

                        <h3><b>Bunuba Bushfoods</b></h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Register for full access to all the Bunuba Plants!</h5>
                        <p className="card-text">Once Registered you'll be able to search, favouite and peronally categorise the plants.</p>
                        <Link to="Register" className="btn bt-dark">
                            Register
                        </ Link>
                        <Link to="/login" className="btn btn-dark">
                            Login
                        </ Link>
                    </div>
                    <div className="card-footer text-muted fixed-bottom">
                        {/* <img scr={require('./LogoB.png')} width="30" height="30" alt="Logo" /> */}
                    </div>
                </div>
            </div>
             
      );
    }
  }
  export default Landing;
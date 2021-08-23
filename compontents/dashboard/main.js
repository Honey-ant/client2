import { main } from "@popperjs/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect  } from "react-redux";
import { logoutUser } from "../../actions/authActions.js";
import { propTypes } from "react-bootstrap/esm/Image";

class Main extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

  render() {
    const {user} = this.props.auth;

    return (
        <>
            <img src="/assests/oldBridge.JPG" class="img-fluid " alt="Responsive image"/>
     <div className="container card-img-overlay card-inverse justify-content-center " alt="Responsive image">
          <div>
              <h2 className="card-title display-4 justify-content-center text-center">
                  <b>Yarra<u>ng</u>i Tha<u>ng</u>ani Lu<u>n</u>du, Mayi Yani-u || Bunuba Bush foods and Plants</b>
              </h2>
              <p class="justify-content-center" >Look</p>
        
                    <form className="row conatiner-fluid justify-content-center ">
                      <div className="col justify-content-center ">
                        <input class="form-control mw-100 justify-content-center rounded-pill col justify-content-center " type="search" placeholder="Search" aria-label="Search"/>
                      </div>
                      <div class="col justify-content-center ">
                        <button class="btn btn-dark rounded-pill mw-50 me-2 " role="button" type="submit">Search</button>
                      </div>

                    </form>
        
              <h1 class="card-text text-center">Search for plants!</h1>
            </div> 
      </div>

        <h1 class="plant">Plant profiles</h1>
        <div class="cards container-fluid row">
              <div class="card p-3 mb-5 bg-white rounded" style="width: 30rem;">
                  <img src="/assests/set.jpg" class="card-img-top" alt="Responsive image"/>
                  <div class="card-body">
                    <h5 class="card-title"><i class="bi bi-tree"></i> Gu<u>ng</u>gala</h5>
                    <p class="card-text">This shrub grows grows arcoss northern Australia and is found in <b>ba<u>l</u>i<u>l</u>i</b>. 
                      It can be seen at <b>Da<u>ng</u>gu</b>. <b>Gu<u>ng</u>gala</b> is often found in patches, or growing under taller tress.</p>
                      <p class="card-text comments">The stems can be used to make fire by the traditional drilling method.</p>
                  
                      <ul class="">
                          <li>
                              <b>Height</b>: 2-4m
                          </li>
                          <li>
                            <b>Ma<u>l</u>arri</b>: rough, grey-brown
                          </li>
                          <li>
                            <b>Wirru</b>: small, cream-green outside and orange-brown inside
                        </li>
                        <li>
                            <b>Fruit</b>: samll (0.5cm), smooth, round, black when ripe
                        </li>
                        <li>
                            <b>Wanjali</b>: opposite, oval, or triangular, sometimes serrated, with a pointed tip on long stalks
                        </li>
                      </ul>
                  <div class= "season-wheels"> 
                          <img src="./assests/Seassons.png" class="season-img"/>
                  </div>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

              <div class="card p-3 mb-5 bg-white rounded" style="width: 30rem;">
                <img src="/assests/Danggu.png" class="card-img-top" alt="Responsive image"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <ul>
                          <li>
                              <b>Height</b>: 2-4m
                          </li>
                          <li>
                            <b>Ma<u>l</u>arri</b>:
                          </li>
                          <li>
                            <b></b> 
                        </li>
                        <li>
                            <b></b> 
                        </li>
                        <li>
                            <b></b> 
                        </li>
                      </ul>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                      <button
                      onCLick={this.onLogoutClick}
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                      >
                          Logout
                      </button>
              </div>

</div>

        </>
    );
  }
}

// auth is required - figure that out
Main.propType = {
    // logoutUser: propTypes.func.isRequired,
    // auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(
    mapStateToProps,
    { logoutUser }
)(Main);
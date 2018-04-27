import React, { Component } from "react";
import "./index.css";
import "../../node_modules/materialize-css/dist/css/materialize.css";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
    this.responseFacebook = this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  responseFacebook(response) {
    //TODO
    console.log(response);
    localStorage.setItem(
      "fbData",
      JSON.stringify({
        token: response.token,
        email: response.email,
        name: response.name,
        picture: response.picture.data.url,
        social: "fb"
      })
    );
    this.setState({
      isLogged: true
    });
  }

  responseGoogle(response) {
    //TODO
    console.log(response);
    localStorage.setItem(
      "googleData",
      JSON.stringify({
        token: response.token,
        email: response.profileObj.email,
        name: response.profileObj.name,
        picture: response.profileObj.imageUrl,
        social: "google"
      })
    );
    this.setState({
      isLogged: true
    });
  }
  onFailure(err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  }

  componentWillMount() {
    if (localStorage.getItem("fbData") || localStorage.getItem("googleData")) {
      this.setState({
        isLogged: true
      });
    }
  }

  render() {
    if (this.state.isLogged) {
      return <Redirect to="/home/" />;
    }
    const style_justify = {
      textAlign: "justify"
    };
    const style_center = {
      textAlign: "center"
    };
    return (
      <div className="Login">
        <div className="row">
          <div className="col m4 offset-m4">
            <div className="card">
              <div className="card-content">
                <span className="card-title" style={style_center}>
                  {" "}
                  Login con redes sociales{" "}
                </span>
                <p style={style_justify}>
                  Este programa sirve de base para realizar login con redes
                  sociales como facebook y Google. Se implemento el redux y
                  librerias como react-facebook-login y react-google-login
                </p>
              </div>
              <div className="card-action">
                <div className="" style={style_center}>
                  <FacebookLogin
                    appId="198995737492494"
                    autoLoad={false}
                    fields="name, email, picture.width(120)"
                    callback={this.responseFacebook}
                    onFailure={this.onFailure}
                    textButton="Facebook"
                    cssClass={
                      "waves-effects waves-light btn-large btn-facebook"
                    }
                    icon={"fa fa-facebook"}
                  />{" "}
                  <GoogleLogin
                    clientId="861238651764-lq5v3ce3na5oo57hdbd6c70nqq3tr88q.apps.googleusercontent.com"
                    autoLoad={false}
                    onSuccess={this.responseGoogle}
                    onFailure={this.onFailure}
                    className="waves-effects waves-light btn-large btn-google"
                  >
                    <i className="fa fa-google" />
                    <span> Google </span>
                  </GoogleLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

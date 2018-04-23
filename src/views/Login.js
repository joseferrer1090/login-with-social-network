import React, { Component } from "react";
import "./index.css";
import "../../node_modules/materialize-css/dist/css/materialize.css";

import FacebookLogin from "react-facebook-login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  responseFacebook(response) {}

  onFailure(err) {}

  render() {
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
                  />
                  <button className="waves-effects waves-light btn-large btn-google">
                    {" "}
                    <i className="fa fa-google-plus" /> Google{" "}
                  </button>
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

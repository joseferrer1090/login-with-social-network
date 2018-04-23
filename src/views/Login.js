import React, { Component } from "react";
import "./index.css";
import "../../node_modules/materialize-css/dist/css/materialize.css";

class Login extends Component {
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
                  <button className="waves-effects waves-light btn-large btn-facebook">
                    {" "}
                    <i className="fa fa-facebook" /> facebook
                  </button>{" "}
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

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      fullName: "",
      isLogout: false
    };
    this.logout = this.logout.bind(this);
  }
  componentWillMount() {
    let fbData = JSON.parse(localStorage.getItem("fbData"));
    let googleData = JSON.parse(localStorage.getItem("googleData"));
    if (!fbData && !googleData) {
      this.setState({
        isLogout: true
      });
    }
    if (fbData) {
      this.setState({
        profileImage: fbData.picture,
        fullName: fbData.name
      });
      console.log(fbData);
    } else if (googleData) {
      this.setState({
        profileImage: googleData.picture,
        fullName: googleData.name
      });
      console.log(googleData);
    }
  }

  logout(e) {
    localStorage.clear();
    this.setState({ isLogout: true });
  }

  render() {
    const styleNav = {
      padding: "0"
    };
    console.log(this.state.fullName);
    console.log(this.state.profileImage);
    if (this.state.isLogout) {
      return <Redirect to="/" />;
    }
    return (
      <div className="">
        <div className="row">
          <nav style={styleNav}>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                <img
                  src={this.state.profileImage}
                  alt=""
                  className="circle responsive-img"
                  width="50"
                />
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="">{this.state.fullName}</a>
                </li>
                <li>
                  <a onClick={this.logout}>
                    <i className="fa fa-power-off" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Home;

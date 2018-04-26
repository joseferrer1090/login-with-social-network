import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      fullName: ""
    };
  }
  componentWillMount() {
    let fbData = JSON.parse(localStorage.getItem("fbData"));
    let googleData = JSON.parse(localStorage.getItem("googleData"));
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
  render() {
    const styleNav = {
      padding: "5px"
    };
    console.log(this.state.fullName);
    console.log(this.state.profileImage);
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
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Home;

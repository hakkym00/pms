import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class AppBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      signUpLogin: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      signUpLogin: !state.signUpLogin
    }));
  }
  render() {
    
      return (
        <Fragment>
          <Navbar bg="dark">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav onClick={this.handleClick}>
                <Link className="text-gold" to={this.state.signUpLogin ? "/" : "/register"}>
                  <i className="input-group-text fas fa-user-circle bg-transparent text-gold border-0 m-auto"></i>
                  {this.state.signUpLogin ? "Login" : "SingUp"}
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Fragment>
      )
    }
}

export default AppBar;

/*
 *
 * CustomNavbar
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectCustomNavbar from './selectors';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import {
  isLogedIn,
  tryLogout,
} from '../../api';

export class CustomNavbar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  getUserDropdown() {
    if (isLogedIn()) {
      return (
        <NavDropdown eventKey={3} title="Options" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} onClick={this.logout}>Logout</MenuItem>
        </NavDropdown>
      );
    }
    return (
      <NavDropdown eventKey={3} title="Options" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Login</MenuItem>
      </NavDropdown>
    );
  }

  logout() {
    this.props.tryLogout();
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Information Messaging System</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin/projects">Projects</NavItem>
            {this.getUserDropdown()}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

CustomNavbar.propTypes = {
  tryLogout: React.PropTypes.func,
};

// const mapStateToProps = selectCustomNavbar();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    tryLogout,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CustomNavbar);

/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

/*
 * This is the Root Component for the Application
 * All rendered components on all routes will
 * will be rendered through this component
 */

// Third Party imports
import React, { Component } from 'react';
import 'sanitize.css/sanitize.css';

// First party imports
import styles from './styles.css';
import CustomNavbar from '../CustomNavbar';

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <CustomNavbar />
        {this.props.children}
      </div>
    );
  }
}

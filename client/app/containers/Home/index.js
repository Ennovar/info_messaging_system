/*
 *
 * Home
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles.css';
import LoginForm from '../../components/LoginForm';
import {
  tryLogin,
} from '../../api';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  login(email, password) {
    console.log(email);
    this.props.tryLogin({
      email,
      password,
    });
  }
  render() {
    return (
      <div className={styles.home}>
        <div className="col-md-4 col-md-offset-4">
          <LoginForm onLogin={this.login.bind(this)} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  tryLogin: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    tryLogin,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);

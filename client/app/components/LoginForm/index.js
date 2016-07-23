/**
*
* LoginForm
*
*/

import React from 'react';

import styles from './styles.css';

class LoginForm extends React.Component {
  // validate email while typing
  validateEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  // validate password while typing
  validatePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  // try to login
  tryLogin(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    if (email && password) {
      this.props.onLogin(email, password);
    }
  }
  
  render() {
    return (
      <form className={styles.loginForm}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>Login</h4>
          </div>
          <div className="panel-body">
            <div className="form-group">
              <label>Email</label>
              <input onChange={this.validateEmail.bind(this)} type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={this.validatePassword.bind(this)} type="password" className="form-control" />
            </div>
            <button className="btn btn-primary pull-right" onClick={this.tryLogin.bind(this)} type="submit">Login</button>
          </div>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: React.PropTypes.func.isRequired,
};

export default LoginForm;

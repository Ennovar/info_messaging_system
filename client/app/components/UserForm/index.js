/**
*
* UserForm
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

function UserForm({ onSubmit }) {
  let email = '';
  let password = '';

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">New User</h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              onChange={(e) => {
                email = e.target.value;
              }}
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              onChange={(e) => {
                password = e.target.value;
              }}
              type="password"
            />
          </div>
          <div className="form-group clearfix">
            <button
              className="btn btn-default pull-right"
              type="submit"
              onClick={(e) => onSubmit(email, password, e)}
            >Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default UserForm;

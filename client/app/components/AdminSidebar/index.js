/**
*
* AdminSidebar
*
*/

import React from 'react';

import styles from './styles.css';

class AdminSidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const list = this.props.options;
    return (
      <div className={styles.adminSidebar}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>{this.props.title}</h4>
          </div>
          <div className="panel-body">
            <div className="list-group">
              {list}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AdminSidebar.propTypes = {
  title: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
};

export default AdminSidebar;

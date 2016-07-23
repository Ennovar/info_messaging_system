/**
*
* AdminList
*
*/

import React from 'react';

import styles from './styles.css';

class AdminList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getList(list) {
    const listItems = [];
    for (let i = 0; i < list.length; i++) {
      // let item = list[i];
      listItems.push(
        <li className="list-group-item">Something</li>
      );
    }
    return listItems;
  }
  render() {
    const list = this.getList(this.props.options);
    return (
      <div className={styles.adminList}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>{this.props.title}</h4>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {list}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
AdminList.propTypes = {
  title: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
};

export default AdminList;

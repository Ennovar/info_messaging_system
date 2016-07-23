/**
*
* CollectionView
*
*/

// Library imports
import React, { Component, PropTypes } from 'react';

// User imports
//   - styles
import styles from './styles.css';

class CollectionView extends Component {

  setupCollection() {
    if (this.props.collection) {
      const { collection } = this.props;

      const collectionList = collection.map((obj) => (
        <div
          className={`${styles.cell} col-xs-6 col-sm-3 col-md-2`}
          key={obj.id}
          onClick={() => this.props.cellClicked(obj)}
        >
          <h4 className={styles.title}>{obj.title}</h4>
        </div>
      ));
      return collectionList;
    }
    return null;
  }

  render() {
    return (
      <div className={styles.collectionView}>
        {this.setupCollection()}
      </div>
    );
  }
}

CollectionView.propTypes = {
  collection: PropTypes.array,
  cellClicked: PropTypes.func.isRequired,
};

export default CollectionView;

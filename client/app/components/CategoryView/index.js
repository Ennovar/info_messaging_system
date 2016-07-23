/**
*
* CategoryView
*
*/

import React from 'react';

import styles from './styles.css';
import { browserHistory } from 'react-router';

class CategoryView extends React.Component {
  constructor() {
    super();

    this.viewPost = this.viewPost.bind(this);
  }

  setupPosts() {
    const collection = [];
    for (let i = 0; i < this.props.category.posts.length; i++) {
      const obj = this.props.category.posts[i];
      collection.push(
        <li onClick={() => this.viewPost(obj.id)} className={`${styles.cell} list-group-item`}>
          <h4 className={styles.title}>{obj.title}</h4>
        </li>
      );
    }
    return collection;
  }

  viewPost(postId) {
    browserHistory.push(`/admin/posts/${postId}`);
  }

  render() {
    return (
      <div className={styles.cell}>
        <div className="clearfix">
          <button onClick={() => this.props.deleteCategory(this.props.category)} className="btn btn-danger pull-right">Delete</button>
          <button onClick={this.props.addPost.bind(this, this.props.category)} className={styles.btn + " btn btn-info pull-right"}>New Post</button>
        </div>
        <div className={styles.title}>
          <h2>
            {this.props.category.title}
          </h2>
        </div>
        <div className="body">
          {this.setupPosts()}
        </div>
      </div>
    );
  }
}

CategoryView.propTypes = {
  category: React.PropTypes.object.isRequired,
  addPost: React.PropTypes.func,
};

export default CategoryView;

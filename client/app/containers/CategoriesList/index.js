/*
 *
 * CategoriesList
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectCategoriesList from './selectors';
import CategoryView from '../../components/CategoryView';
import { Modal } from 'react-bootstrap';
import PostForm from '../../components/PostForm';
import CategoryForm from '../../components/CategoryForm';
import { browserHistory } from 'react-router';

import {
  getCategory,
  createCategory,
  createPost,
  deleteCategory,
} from '../../api';
import styles from './styles.css';

import {
  TEST_CATEGORY,
} from '../AdminDashboard/constants';

export class CategoriesList extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      postModalIsOpen: false,
      categoryModalIsOpen: false,
      warningModalIsOpen: false,
      mainWarningModalIsOpen: false,
      currentCategory: '',
    };

    this.createNewPost = this.createNewPost.bind(this);
    this.confirmedDelete = this.confirmedDelete.bind(this);
    this.confirmedMainDelete = this.confirmedMainDelete.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.deleteMainCategory = this.deleteMainCategory.bind(this);
  }

  componentDidMount() {
    this.props.getCategory(this.props.params.category_id);
  }

  setupCategories() {
    const cats = [];
    if (this.props.currentCategory) {
      for (let i = 0; i < this.props.currentCategory.sub_categories.length; i++) {
        const category = this.props.currentCategory.sub_categories[i];
        cats.push(
          <div key={category.name} className="col-sm-6">
            <CategoryView category={this.props.currentCategory.sub_categories[i]} addPost={this.newPost.bind(this)} deleteCategory={this.deleteCategory} />
          </div>
        );
      }
    }
    return cats;
  }

  deleteCategory(category) {
    this.setState({
      warningModalIsOpen: true,
      currentCategory: category,
    });
  }

  newCategory() {
    this.setState({
      categoryModalIsOpen: true,
    });
  }

  confirmedDelete() {
    this.closeModal();
    alert('Sub Category has been deleted');
    this.props.deleteCategory(this.state.currentCategory.id).then(() => {
      this.props.getCategory(this.props.params.category_id);
    });
  }

  confirmedMainDelete() {
    this.closeModal();
    alert('Category has been deleted');
    this.props.deleteCategory(this.state.currentCategory).then(() => {
      browserHistory.push('/admin/categories');
    });
  }

  newPost(category) {
    this.setState({
      postModalIsOpen: true,
      currentCategory: category,
    });
  }

  closeModal() {
    this.setState({
      postModalIsOpen: false,
      categoryModalIsOpen: false,
      warningModalIsOpen: false,
      mainWarningModalIsOpen: false,
    });
  }

  createCategory(category) {
    category.category.category_id = Number(this.props.params.category_id);
    this.props.createCategory(category);
    this.closeModal();
  }

  createNewPost(post) {
    console.log(this.state.currentCategory.id);
    post.post.category_id = Number(this.state.currentCategory.id);
    this.props.createPost(post);
    this.closeModal();
    this.props.getCategory(this.props.params.category_id);
  }

  deleteMainCategory() {
    this.setState({
      mainWarningModalIsOpen: true,
      currentCategory: this.props.params.category_id,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <button className={`${styles.delete} btn btn-danger pull-right`} onClick={this.deleteMainCategory}>Delete Category</button>
          <button className="btn btn-primary pull-right" onClick={this.newCategory.bind(this)}>New Sub Category</button>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2>
              {this.props.currentCategory ? this.props.currentCategory.title : '' }
            </h2>
          </div>
        </div>
        <div className="row">
          {this.setupCategories()}
        </div>
        {/* Post Modal */}
        <Modal
          show={this.state.postModalIsOpen}
          onHide={this.closeModal.bind(this)}
          bsSize="large"
          >
          <Modal.Header
            closeButton={true}>
            <h3>New Post For {this.state.currentCategory.title}</h3>
          </Modal.Header>
          <Modal.Body>
            <PostForm submit={this.createNewPost} type={'Submit'} />
          </Modal.Body>
        </Modal>
        {/* Category Modal */}
        <Modal
          show={this.state.categoryModalIsOpen}
          onHide={this.closeModal.bind(this)} >
          <Modal.Header
            closeButton={true}>
            <h3>New Sub Category</h3>
          </Modal.Header>
          <Modal.Body>
            <CategoryForm submit={this.createCategory.bind(this)} />
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.warningModalIsOpen}
          onHide={this.closeModal.bind(this)} >
          <Modal.Header
            closeButton={true}>
            <h3>Are you sure you want to delete this Sub Category?</h3>
          </Modal.Header>
          <Modal.Body>
            <button className="btn btn-primary" onClick={this.confirmedDelete}>Confirm</button>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.mainWarningModalIsOpen}
          onHide={this.closeModal.bind(this)} >
          <Modal.Header
            closeButton={true}>
            <h3>Are you sure you want to delete this Category?</h3>
          </Modal.Header>
          <Modal.Body>
            <button className="btn btn-primary" onClick={this.confirmedMainDelete}>Confirm</button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  currentCategory: PropTypes.object,
  deleteCategory: PropTypes.func,
  getCategory: PropTypes.func,
};

const mapStateToProps = selectCategoriesList();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCategory,
    createCategory,
    deleteCategory,
    createPost,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);

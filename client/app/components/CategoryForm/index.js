/**
*
* CategoryForm
*
*/

import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

class CategoryForm extends Component {

  constructor() {
    super();

    this.state = {
      title: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.prepareSubmit = this.prepareSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ title: e.target.value });
  }

  prepareSubmit(e) {
    e.preventDefault();
    const category = {
      category: {
        title: this.state.title,
      },
    };
    this.props.submit(category);
  }

  render() {
    return (
      <form className={styles.categoryForm}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" onChange={this.onInputChange} type="text" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.prepareSubmit} type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  submit: PropTypes.func,
};

export default CategoryForm;

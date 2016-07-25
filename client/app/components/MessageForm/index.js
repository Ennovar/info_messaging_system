/*
 *
 * ProjectForm
 *
 */

import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './styles.css';


export class MessageForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      original: {},
      new: null,
    };

    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  componentWillMount() {
    this.setState({ original: this.props.message });
  }

  onCheckboxClick() {
    if (this.state.new !== null) {
      this.setState({ new: { ...this.state.new, active: !this.state.new.active } });
    } else {
      this.setState({ new: { ...this.state.new, active: !this.state.original.active } });
    }
  }

  onTitleChange(e) {
    this.setState({ new: { ...this.state.new, title: e.target.value } });
  }

  onBodyChange(e) {
    this.setState({ new: { ...this.state.new, body: e.target.value } });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Modal {...this.props.modal}>
          <Modal.Header closeButton>
            <label>Title</label>
            <input className="form-control" type="text" value={this.state.new === null ? this.state.original.title: this.state.new.title} onChange={(e) => this.onTitleChange(e)} />
          </Modal.Header>
          <Modal.Body>
            <div className="clearfix">
              <label>Body</label>
              <input className="form-control" type="text" value={this.state.new === null ? this.state.original.body: this.state.new.body} onChange={(e) => this.onBodyChange(e)} />
              <div className="checkbox">
                <label>
                  <input type="checkbox" checked={this.state.new === null ? this.state.original.active: this.state.new.active} onChange={this.onCheckboxClick} /> Active
                </label>
              </div>
              <div className="pull-right">
                <button className="btn btn-primary" onClick={() => this.props.updateMessage(this.state.new, this.props.id)}>Update</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

MessageForm.propTypes = {
  id: PropTypes.number,
  modal: PropTypes.object,
  message: PropTypes.object,
};

export default MessageForm;

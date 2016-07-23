/*
 *
 * PostView
 *
 */
import React from 'react';
import { connect } from 'react-redux';
import selectPostView from './selectors';
// import ReactMarkdown from 'react-markdown';
import Remarkable from 'remarkable';
import { Modal } from 'react-bootstrap';
import PostForm from '../../components/PostForm';
import PostPreview from '../../components/PostPreview';
import RichTextEditor from 'react-rte';
import phone from '../../assets/iphone.png';

import {
  getPost,
  deletePost,
  updatePost,
} from '../../api/';
import {
  BASE_URL,
} from '../../api/constants';

import styles from './styles.css';

export class PostView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      postModalIsOpen: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getPost(this.props.params.post_id));
  }

  showEditPost() {
    this.setState({
      postModalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      postModalIsOpen: false,
    });
  }

  updatePost(post) {
    post.post.id = Number(this.props.params.post_id);
    this.props.dispatch(updatePost(post)).then(() => {
      this.props.dispatch(getPost(this.props.params.post_id));
    });
    this.closeModal();
  }

  rawMarkup() {
    if (this.props.currentPost) {
      console.log(this.props.currentPost);
      const post = RichTextEditor.createValueFromString(this.props.currentPost.body, 'markdown');
      return { __html: post.toString('html') };
    }
  }

  deletePost() {
    this.props.dispatch(deletePost(this.props.currentPost.id));
  }

  render() {
    const md = new Remarkable();
    const url = this.props.currentPost.md_asset_url !== '/images/original/missing.png' ?
      `${BASE_URL}${this.props.currentPost.md_asset_url}` :
      '';

    return (
      <div className="container">
        <div className={styles.cell}>
          <div className="clearfix">
            <button onClick={this.deletePost.bind(this)} className="btn btn-danger pull-right" >Delete</button>
            <button onClick={this.showEditPost.bind(this)} className={`${styles.btn} btn btn-info pull-right`}>Edit</button>
          </div>
          <div className={styles.title}>
            <h3>
              {this.props.currentPost && this.props.currentPost.title}
            </h3>
          </div>
          <div className={styles.body}>
            <div className="alert alert-warning">Edit by clicking edit button on the top of the screen, after editing you may have to reload page to see changes</div>
            <PostPreview
              title={this.props.currentPost.title}
              image={url}
              body={this.rawMarkup()}
            />
          </div>
        </div>
        {/* Post Modal */}
        <Modal
          show={this.state.postModalIsOpen}
          onHide={this.closeModal.bind(this)}
          bsSize="large"
        >
          <Modal.Header
            closeButton={true}>
            <h3>
              Edit Post
            </h3>
          </Modal.Header>
          <Modal.Body>
            <PostForm post={this.props.currentPost} submit={this.updatePost.bind(this)} type={'Edit'} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = selectPostView();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);

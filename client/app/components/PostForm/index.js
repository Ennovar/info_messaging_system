/**
*
* PostForm
*
*/

import React from 'react';

import styles from './styles.css';
import RichTextEditor from 'react-rte';
import Remarkable from 'remarkable';

import phone from '../../assets/iphone.png';
import PostPreview from '../PostPreview';
import {
  BASE_URL,
} from '../../api/constants';

class PostForm extends React.Component {

  state = {
    body: this.props.post ? RichTextEditor.createValueFromString(this.props.post.body, 'markdown') : RichTextEditor.createEmptyValue(),
    format: 'markdown',
    title: this.props.post ? this.props.post.title : '',
    imageURL: this.props.post ? `${BASE_URL}${this.props.post.md_asset_url}` : '',
    file: '',
    fileType: '',
    fileName: '',
    content: '',
  };

  onChange(body) {
    this.setState({ body });
  }

  perpareSubmit() {
    let post;
    if(this.state.fileName !== '') {
      post = {
        post: {
          title: this.refs.title.value,
          body: this.state.body.toString('markdown'),
        },
        image: {
          filename: this.state.fileName,
          content: this.state.content,
          content_type: this.state.fileType,
        }
      };
      console.log(post);
    } else {
      post = {
        post: {
          title: this.refs.title.value,
          body: this.state.body.toString('markdown'),
        },
      };
    }
    this.props.submit(post);
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  rawMarkup() {
    if (this.state.body !== '') {
      return { __html: this.state.body.toString('html') };
    }
  }

  onFileChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(file);

    reader.onloadend = (e) => {
      console.log(e.target.result);
      this.setState({
        file: file,
        imageURL: reader.result,
        fileType: file.type,
        fileName: file.name,
        content: e.target.result
      })
    }
    reader.readAsDataURL(file);
  }

  render() {
    let {body, format} = this.state;

    return (
      <div className={`${styles.postForm} clearfix`}>
        <div className="col-md-8">
          <div className="form-group">
            <label>Title</label>
            <input onChange={this.changeTitle.bind(this)} value={this.state.title} ref="title" className="form-control" type="text" name="title" />
          </div>
          <div className="form-group">
            <input className={styles.file} onChange={this.onFileChange.bind(this)} type="file" />
          </div>
          <div className="form-group">
            <label>Body</label>
            <RichTextEditor
              value={body}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div>
            <button onClick={this.perpareSubmit.bind(this)} className="btn btn-primary">{this.props.type && this.props.type}</button>
          </div>
        </div>
        <div className="col-md-4">
          <PostPreview
            body={this.rawMarkup()}
            image={this.state.imageURL}
            title={this.state.title}
          />
        </div>
      </div>
    );
  }
}

export default PostForm;

/*
 *
 * ProjectSetup
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles.css';

import ProjectForm from '../../components/ProjectForm';
import UserForm from '../../components/UserForm';
import {
  createProject,
  createUser,
  tryLogin,
} from '../../api';

export class ProjectSetup extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();

    this.state = {
      stage: 'project',
      project: {
        name: '',
      },
      user: {},
    };

    this.onSubmitProject = this.onSubmitProject.bind(this);
    this.onSubmitUser = this.onSubmitUser.bind(this);
  }

  onSubmitProject(name, event) {
    event.preventDefault();
    this.setState({ stage: 'user', project: { ...this.state.project, name } });
  }

  onSubmitUser(email, password, event) {
    const data = {};
    event.preventDefault();

    if (this.state.stage !== 'project' && email !== '' && password !== '') {
      data.project = this.state.project;
      data.user = {};
      data.user.email = email;
      data.user.password = password;
      console.log(data);
      this.props.createProject(data).then(() => {
        this.props.tryLogin(data.user);
      });
    }
  }

  render() {
    const { stage } = this.state;

    return (
      <div className={styles.projectSetup}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              {stage === 'project' ?
                <ProjectForm onSubmit={this.onSubmitProject} /> :
                <UserForm onSubmit={this.onSubmitUser} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectSetup.propTypes = {
  createProject: PropTypes.func,
  createUser: PropTypes.func,
  tryLogin: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createProject,
    createUser,
    tryLogin,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProjectSetup);

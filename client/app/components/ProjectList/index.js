// Third Party imports
import React, { Component, PropTypes } from 'react';

// Project imports
import MessageForm from '../../components/MessageForm';
import styles from './styles.css';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      index: -1,
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  openModal(id, index) {
    this.props.getProject(id);
    this.setState({ id, index });
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ id: -1, index: -1 });
    this.setState({ modalIsOpen: false });
  }

  updateMessage(state, id) {
    this.props.updateMessage(state, id);
    this.closeModal();
  }

  renderProjects() {
    if (this.props.projects) {
      const { projects } = this.props;
      const projectList = projects.map((project, i) => (
        <div
          className={`${styles.cell} col-xs-6 col-sm-3 col-md-2`}
          key={project.id}
          onClick={() => this.openModal(project.id, i)}
        >
          <h4 className={styles.title}>{project.title}</h4>
          <p className="text-center">
            <code>{project.project_hash}</code>
          </p>
        </div>
      ));
      return projectList;
    }
    return null;
  }

  render() {
    let props = {};
    if (this.state.index !== -1) {
      console.log(this.props);
      console.log(this.state);
      props = {
        modal: {
          show: this.state.modalIsOpen,
          onHide: this.closeModal,
        },
        message: this.props.projects[this.state.index].message,
        hash: this.props.projects[this.state.index].project_hash,
        updateMessage: this.updateMessage,
        id: this.state.id,
      };
    }

    return (
      <div className="row">
        {this.renderProjects()}
        {this.state.modalIsOpen &&
          props.message && <MessageForm {...props} />}
      </div>
    );
  }
}

ProjectList.propTypes = {
  getProject: PropTypes.func,
  projects: PropTypes.array,
};

export default ProjectList;

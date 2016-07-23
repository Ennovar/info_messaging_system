 /*
 *
 * AdminDashboard
 *
 */

// Third Party imports
import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { browserHistory } from 'react-router';

// Project imports
import selectAdminDashboard from './selectors';
// import AdminList from '../../components/AdminList';
// import CollectionView from '../../components/CollectionView';
import ProjectList from '../../components/ProjectList';
import CategoryForm from '../../components/CategoryForm';
import {
  getProject,
  getProjects,
  updateMessage,
} from '../../api';


export class AdminDashboard extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      selectedCategory: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.getProjects();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    const props = {
      modal: {
        show: this.state.modalIsOpen,
        onHide: this.closeModal,
      },
      categoryForm: {
        category: this.state.selectedCategory,
        submit: this.createNewCategory,
      },
      projectList: {
        projects: this.props.projects,
        project: this.props.project,
        getProject: this.props.getProject,
        updateMessage: this.props.updateMessage,
      },
    };


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left">
              <h2>Projects</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProjectList {...props.projectList} />
          </div>
        </div>

        {/* Modal for new category */}
        <Modal {...props.modal}>
          <Modal.Header closeButton>
            Project Message
          </Modal.Header>
          <Modal.Body>
            Project Body
          </Modal.Body>
        </Modal>
        {/* END modal */}
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  getProject: PropTypes.func,
  getProjects: PropTypes.func,
  projects: PropTypes.array,
};

const mapStateToProps = selectAdminDashboard();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProject,
    getProjects,
    updateMessage,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);

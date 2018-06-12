import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn, signUp } from '../../actions/authActions';
import AuthForm from './AuthForm';

const propTypes = {
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  signUp: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  isSigningUp: PropTypes.bool
};

class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    const { isModalOpen, isSigningUp, signUp, signIn } = this.props;
    return (
      <div id="myModal" className="modal" style={(isModalOpen) ? { display: 'block' } : { display: 'none' }}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.props.closeModal.bind(this)}>&times;</span>
            <h2>{(isSigningUp) ? 'Create Account' : 'Sign In'}</h2>
          </div>
          <div className="modal-body">
            <AuthForm isSigningUp={isSigningUp} signUp={signUp} signIn={signIn} />
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    );
  }
}

AuthModal.propTypes = propTypes;
export default connect(null,{ signUp, signIn })(AuthModal);

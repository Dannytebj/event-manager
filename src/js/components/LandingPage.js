import React, { Component } from 'react';
import AuthModal from './auth/AuthModal';
import { connect } from 'react-redux';
import { resetAuthStore } from '../actions/authActions';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isSigningUp: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.authAction = this.authAction.bind(this);
  }

  // authAction(value) {
  //   if (value === 'true') {
  //     return this.setState({
  //       isSigningUp: true
  //     });
  //   }
  //   this.setState({ isSigningUp: false });
  // }

  openModal(event) {
    event.preventDefault();
    if (event.target.value === 'SignUp') {
      return this.setState({
        isSigningUp: true,
        isModalOpen: true
      });
    }
    this.setState({
      isModalOpen: true,
      isSigningUp: false
    });
  }
  closeModal() {
    this.setState({
      isModalOpen: false,
      isSigningUp: false
    });
    this.props.resetAuthStore();
  }
  render() {
    return (
      <div className="wrapper-landing">
        <header>
          <div className="header-components">
            <div className="banner"><span>Event Manager</span></div>
            <div className="auth-buttons">
              <button className="sign-up-button" value="SignUp" onClick={this.openModal}>Sign Up</button>
              <button className="sign-in-button" value="SignIn" onClick={this.openModal}>Sign In</button>
            </div>
          </div>

        </header>
        <main>
          <div className="page-banner">
            <div className="page-banner-text">
              <h2>
              GET STARTED!
              </h2>
              <button value="SignUp" onClick={this.openModal}>Sign Up</button>
            </div>
          </div>
          <h1>Up Coming...</h1>
          <div className="events-grid">
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div>
            <div className="five">5</div>
            <div className="six">6</div>
          </div>
        </main>
        <footer>Footer goes here!</footer>
        <AuthModal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} isSigningUp= {this.state.isSigningUp} />
      </div>
    );
  }
}

export default connect(null, { resetAuthStore })(LandingPage);

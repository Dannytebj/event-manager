import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import TextBox from '../../utils/TextBox';
import { signInValidator, signUpValidator } from '../../utils/validators';

const propTypes = {
  isSigningUp: PropTypes.bool,
  signUp: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired
};



class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (!props.isSigningUp) {
      console.log(props);
    }
    return null;
  }

  createUser() {
    const { isValid, errors } = signUpValidator(this.state);
    if(!isValid) {
      this.setState({ errors });
    } else {
      this.props.signUp(this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        this.setState({ errors: error.response.data, isLoading: false })});
    }
  }

  login() {
    const { isValid, errors } = signInValidator(this.state);
    if(!isValid) {
      this.setState({ errors });
    } else {
      const { email, password } = this.state;
      this.props.signIn({ email, password })
      .then(response => {
        console.log(response);
        this.setState({ name: '', email: '', password: '', confirmPassword:'' })

      })
      .catch(error => {
        this.setState({ errors: error.response.data, isLoading: false })});
    }

  }

  onSubmit() {
    if (this.props.isSigningUp) {
      this.createUser();
    } else {
      this.login();
    }
  }
  render() {
    const { name, email, password, confirmPassword, errors } = this.state;
    return (
      <div className="sign-up">
        {(this.props.isSigningUp) ?
          <TextBox
            className={classname("text-box", { 'has-error': errors.name })}
            onChange={(value) => { this.setState({ name: value }); }}
            label="Full Name"
            currentValue={name}
            error={errors.name}
          />  : ''
        }
        <TextBox
          className={classname("text-box", { 'has-error': errors.email })}
          onChange={(value) => { this.setState({ email: value }); }}
          label="Email"
          currentValue={email}
          error={errors.email}
        />
        <TextBox
          className={classname("text-box", { 'has-error': errors.password })}
          onChange={(value) => { this.setState({ password: value }); }}
          label="Password"
          currentValue={password}
          isPassword
          error={errors.password}
        />
        {(this.props.isSigningUp) ?
          <TextBox
            className={classname("text-box", { 'has-error': errors.confirmPassword })}
            onChange={(value) => { this.setState({ confirmPassword: value }); }}
            label="Confirm Password"
            currentValue={confirmPassword}
            isPassword
            error={errors.confirmPassword}
          /> : ''
        }
        <button onClick={this.onSubmit}>{(this.props.isSigningUp)? 'Create Account' : 'Sign In'}</button>
      </div>
    );
  }
}
AuthForm.propTypes = propTypes;
export default AuthForm;

// this.setState({ errors: {}, isLoading: true });
//       if (isSigningUp){
//         signUp(this.state)
//         .then(response => {
//           console.log(response);
//         })
//         .catch(error => {
//           this.setState({ errors: error.response.data, isLoading: false })});
//       }
//       signIn(this.state)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => this.setState({ errors: error.response.data, isLoading: false }));

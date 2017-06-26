import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { postSignUp, localStorageSignUp } from '../../actions';
import { Route, Redirect } from 'react-router-dom';
import RedirectClose from './redirectClose';


import google_logo from '../../assets/img/google_logo.png';

const mapStateToProps = (state) => {
  return {
    success: state.signupReducer.signupSuccess,
    errMsg: state.signupReducer.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postSignUp, localStorageSignUp }, dispatch);
};

class SignUp extends Component {

  displaySuccessAlert = () => {
    if (this.props.success === true) {
      return { display: 'block' };
    }
    else {
      return { display: 'none' };
    }
  }

  displayFailAlert = () => {
    if (this.props.success === false) {
      return { display: 'none' };
    }
    else {
      return { display: 'none' };
    }
  }

  displaySubmit = () => {
    if (this.props.success === true) {
      return { display: 'none' };
    }
    else {
      return { display: 'block' };
    }
  }

  onSubmit = (value) => {
    const user = value;
    const info = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    };
    this.props.localStorageSignUp(info);
  }

  handleSwitch = () => {
    window.location.assign('https://ppp-capstone-music.herokuapp.com/auth/google/');
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div id="signUp" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="signup-modal">
              <button className="btn signup-modal-btn-google" onClick={this.handleSwitch}>
                <div className="signup-modal-btn-google-inside">
                  <img src={google_logo}></img>
                  <span>Sign Up with Google</span>
                </div>
              </button>

              <div className="signup-modal-or-decorate">
                <div className="signup-modal-or-decorate-lineL">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </div>
                <span>or</span>
                <div className="signup-modal-or-decorate-lineR">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </div>
              </div>

              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="signup-modal-content">

                  <Field name="firstName" component="input" type="text" placeholder="First Name" className="signup-modal-content-detail" required/>
                  <Field name="lastName" component="input" type="text" placeholder="Last Name" className="signup-modal-content-detail" required/>
                  <Field name="email" component="input" type="email" placeholder="Email" className="signup-modal-content-detail" required/>
                  <Field name="password" component="input" type="password" placeholder="Password (minimum of 8 characters)" className="signup-modal-content-detail" required/>
                  <Field name="confirmPassword" component="input" type="password" placeholder="Confirm Password" className="signup-modal-content-detail" required/>
                </div>

                <div className="signup-modal-foot-btn">
                  <button style={this.displaySubmit()} type="button" className="btn btn-info" type="submit">
                    <h5>Sign Up</h5>
                  </button>
                  <RedirectClose />
                </div>

              </form>

              <div className="alert alert-success" role="alert" style={this.displaySuccessAlert()} >
                <strong>Congrats!! &nbsp; 😄  &nbsp;</strong> Sign Up Successful!
              </div>

              <div className="alert alert-danger" role="alert" style={this.displayFailAlert()} >
                <strong>Warning! &nbsp; 🙁  &nbsp;</strong> Invalid form submission. {this.props.errMsg} Please retry with valid inputs. Thank You.
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

let SignUpWithForm = reduxForm({ form: 'signup' })(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpWithForm);

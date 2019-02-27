import React, { Component } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './AuthForm.module.css';

const propTypes = {
    onAuth: PropTypes.func.isRequired,
    onRegistration: PropTypes.func.isRequired,
    error: PropTypes.string
};

const defaultProps = {

};

const AUTH_STATE = {
    LOGIN: 'login',
    REGISTRATION: 'registration'
};

class AuthForm extends Component {
    state = {
        authState: AUTH_STATE.LOGIN
    }

    handleClickLogin = () => {
        if(this.state.authMode !== AUTH_STATE.LOGIN){
            this.setState({ authState: AUTH_STATE.LOGIN });
        } 
    }

    handleClickRegistration = () => {
        if(!this.state.isRegistrationMode){
            this.setState({ authState: AUTH_STATE.REGISTRATION });
        } 
    }

    render() {
        const sumitButtonText = this.state.authState === AUTH_STATE.LOGIN ? 'SIGN IN' : 'SIGN UP';
        return (
            <Aux>
                <div className={classes.ToggleAuthState}>
                    <div className={this.state.authState === AUTH_STATE.LOGIN ? classes.Active: classes.NotActive}
                        onClick={this.handleClickLogin}
                    >
                        SIGN IN
                    </div>
                    <div className={this.state.authState === AUTH_STATE.REGISTRATION ? classes.Active: classes.NotActive}
                        onClick={this.handleClickRegistration}
                    >
                        SIGN UP
                    </div>
                </div>
                <Formik
                    initialValues={{ userName: '', password: '', passwordCheck: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                    if(this.state.authState === AUTH_STATE.LOGIN) {
                        this.props.onAuth(values);
                    } 
                    if(this.state.authState === AUTH_STATE.REGISTRATION) {
                        this.props.onRegistration(values);
                    } 
                    setSubmitting(false);
                    }}
                    validate={values => {
                    let errors = {};
                    const minLength = 4;
                    if (!values.userName) { errors.userName = 'Required'; }
                    if (!values.password) { errors.password = 'Required'; }
                        else if (values.password.length < minLength) { errors.password = "Too small"; }
                    if (this.state.authState === AUTH_STATE.REGISTRATION && !values.passwordCheck) { errors.passwordCheck = 'Required'; }
                    else if (this.state.authState === AUTH_STATE.REGISTRATION && values.passwordCheck !== values.password) { errors.passwordCheck = "Passwords do not match"; }
                    return errors;
                    }}
                >
                    {({
                values, 
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                }) => {
                    return (
                        <form  
                            className={classes.Form}
                            onSubmit={handleSubmit}
                        >
                            <div>User Name: <span style={{color: "red"}}>{errors.userName && touched.userName && errors.userName}</span></div>
                            <input 
                                type="text"
                                name="userName"
                                value={values.userName}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                            />
                            <div>Password: <span style={{color: "red"}}>{errors.password && touched.password && errors.password}</span></div>
                            <input 
                                type="password" 
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div  style={this.state.authState === AUTH_STATE.LOGIN ? {display: "none"} : null}> Repeat Password: <span style={{color: "red"}}>{errors.passwordCheck && touched.passwordCheck && errors.passwordCheck}</span></div>
                            <input style={this.state.authState === AUTH_STATE.LOGIN ? {display: "none"} : null}
                                type="password" 
                                name="passwordCheck"
                                value={values.passwordCheck}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <button type="submit" disabled={isSubmitting}>
                                {sumitButtonText}</button> 
                            <div style={{textAlign: "center", color: "red"}}>{this.props.error}</div>
                        </form>
                    );
                } 
                }
                </Formik>
            </Aux>
        )
    }  
}

export default AuthForm;

AuthForm.propTypes = propTypes;
AuthForm.defaultProps = defaultProps;
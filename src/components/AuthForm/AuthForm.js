import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
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

const loginSchema = yup.object().shape({
    userName: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required!'),
    password: yup
        .string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required!')
});

const registrationSchema = yup.object().shape({
    userName: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required!'),
    password: yup
        .string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required!'),
    passwordCheck: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords do not match!')
        .required('Required!')
});

class AuthForm extends Component {
    state = {
        authState: AUTH_STATE.LOGIN
    }

    handleClickLogin = () => {
        if(this.state.authState !== AUTH_STATE.LOGIN){
            this.setState({ authState: AUTH_STATE.LOGIN });   
            this.props.errorReset();         
        } 
    }

    handleClickRegistration = () => {
        if(this.state.authState !== AUTH_STATE.REGISTRATION){
            this.setState({ authState: AUTH_STATE.REGISTRATION });
            this.props.errorReset();
        } 
    }

    handleSubmit = (values, setSubmitting) => {
        this.state.authState === AUTH_STATE.LOGIN && this.props.onAuth(values);
        this.state.authState === AUTH_STATE.REGISTRATION && this.props.onRegistration(values);
        return setSubmitting(false);
    }

    render() {
        let authForm;
        if(this.state.authState === AUTH_STATE.LOGIN) {
            authForm = <Formik
            initialValues={{ userName: '', password: ''}}
            onSubmit={(values, { setSubmitting }) => {
                this.handleSubmit(values, setSubmitting);
            }}
            validationSchema={loginSchema}
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
                    <div>User Name: <span className={classes.Error}>{errors.userName && touched.userName && errors.userName}</span></div>
                    <input className={classes.Input}
                        type="text"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                    />
                    <div>Password: <span className={classes.Error}>{errors.password && touched.password && errors.password}</span></div>
                    <input className={classes.Input}
                        type="password" 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <button type="submit" disabled={isSubmitting}>LOG IN</button> 
                    <div style={{textAlign: "center", color: "red"}}>{this.props.loginErrorMessage}</div>
                </form>
            );
        } 
        }
        </Formik>;
        }
        if(this.state.authState === AUTH_STATE.REGISTRATION) {
            authForm = <Formik
            initialValues={{ userName: '', password: '', passwordCheck: ''}}
            onSubmit={(values, { setSubmitting }) => {
                this.handleSubmit(values, setSubmitting);
            }}
            validationSchema={registrationSchema}
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
                    <div>User Name: <span className={classes.Error}>{errors.userName && touched.userName && errors.userName}</span></div>
                    <input className={classes.Input}
                        type="text"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                    />
                    <div>Password: <span className={classes.Error}>{errors.password && touched.password && errors.password}</span></div>
                    <input className={classes.Input}
                        type="password" 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <div> Repeat Password: <span className={classes.Error}>{errors.passwordCheck && touched.passwordCheck && errors.passwordCheck}</span></div>
                    <input className={classes.Input}
                        type="password" 
                        name="passwordCheck"
                        value={values.passwordCheck}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <button type="submit" disabled={isSubmitting}>SIGN UP</button> 
                    <div style={{textAlign: "center", color: "red"}}>{this.props.registrationErrorMessage}</div>
                </form>
            );
        }}
        </Formik>;
        }

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
                {authForm}
            </Aux>
        )
    }  
}

export default AuthForm;

AuthForm.propTypes = propTypes;
AuthForm.defaultProps = defaultProps;
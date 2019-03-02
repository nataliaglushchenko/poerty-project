import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavigationItems from '../NavigationItems/';
import AuthForm from '../../AuthForm';
import Modal from '../../UI/Modal/Modal';

import classes from './Toolbar.module.css';

const propTypes = {
    onAuthInit: PropTypes.func.isRequired,
    onAuthCancel: PropTypes.func.isRequired,
    onRegistration: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    showAuthForm: PropTypes.bool.isRequired,
    loginErrorMessage: PropTypes.string,
    registrationErrorMessage: PropTypes.string
};

const defaultProps = {

};

export class Toolbar extends Component {    
    render () {
        let auth = !this.props.isAuthenticated
            ? <div className={classes.Login} onClick={this.props.onAuthInit}>LOG IN</div> 
            : <div className={classes.Logout} onClick={this.props.onLogout}>LOG OUT</div>; 
        return (
            <header className={classes.Toolbar}>
                <nav>
                    <NavigationItems />
                </nav>
                {auth}
                <Modal 
                    show={this.props.showAuthForm}
                    click={this.props.onAuthCancel}>
                    <AuthForm 
                        onAuth={this.props.onAuth}
                        onRegistration={this.props.onRegistration}
                        loginErrorMessage={this.props.loginErrorMessage}
                        registrationErrorMessage={this.props.registrationErrorMessage}
                        errorReset={this.props.onErrorReset}
                    />
                </Modal>
            </header>
        );
    }  
};

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;
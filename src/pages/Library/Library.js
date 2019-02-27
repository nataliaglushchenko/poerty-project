import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ContentsPreview from './ContentsPreview/';
import Aux from '../../hoc/Auxillary/Auxillary';

import classes from './Library.module.css';


const propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    userData: PropTypes.object
};

const defaultProps = {

};

export class Library extends Component {
    render() {
        let greeting = null;
        greeting = this.props.isAuthenticated ? <div className={classes.Greeting}>Hello, <i>{this.props.userData.userName}</i></div> : null;
        return (
            <Aux>
                <div className={classes.Library}>
                    {greeting}
                    <h2>WELCOME TO THE LIBRARY!</h2>
                    <div>PLEASE ENJOY READING POEMS! <Link to="/new">OR CREATE YOUR OWN POEM!</Link></div>
                    <div>OUR RECOMMENDATIONS:</div>
                    <ContentsPreview />
                </div>
            </Aux>
            
        );
    }
}

export default Library;

Library.propTypes = propTypes;
Library.defaultProps = defaultProps;
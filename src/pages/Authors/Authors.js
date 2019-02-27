import React, { Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Authors.module.css';

const propTypes = {
    authors: PropTypes.array.isRequired
};

const defaultProps = {

};

export default class Authors extends Component {
    render(){
        const authors = this.props.authors.map(author => {
            return <div key={author.id} className={classes.Author}>{author.name}</div>
        });

        return (
            <div className={classes.Authors}>
                <h2>Authors:</h2>   
                {authors}
            </div>
            
            
        );
    }
}

Authors.propTypes = propTypes;
Authors.defaultProps = defaultProps;
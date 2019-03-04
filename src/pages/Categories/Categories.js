import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

import classes from './Categories.module.css';

const propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired)
};

const defaultProps = {

};

const AsyncOverview = asyncComponent(() => {
    return import('./Overview');
  });

  
export default class Categories extends Component {
    render(){
        const categories = this.props.categories.map(category => {
            return <Link 
                    key={category.id} 
                    className={classes.Category}
                    to={`/categories/${category.slug}`}
                    >{category.name}
                </Link>
        });

        return (
            <div className={classes.Categories}>
                <h2>Categories:</h2>   
                {categories}
                <Route path="/categories/:slug" exact component={AsyncOverview} />
            </div>            
        );
    }
}

Categories.propTypes = propTypes;
Categories.defaultProps = defaultProps;
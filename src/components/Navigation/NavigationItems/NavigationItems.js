import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const propTypes = {
    onFetchCategories: PropTypes.func.isRequired,
    onFetchAuthors: PropTypes.func.isRequired,
    isCategoriesLoaded: PropTypes.bool.isRequired,
    isAuthorsLoaded: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired,
    authors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};

const defaultProps = {

};

export class NavigationItems extends Component {
    componentDidMount(){
        this.props.onFetchCategories();
        this.props.onFetchAuthors();
    }
    render(){
        let categories = null;
        if(this.props.isCategoriesLoaded) {
            categories = this.props.categories.map(category => {
                return <NavigationItem
                            key={category.id}
                            link={`/categories/${category.slug}`}
                            exact
                            >{category.name.toUpperCase()}</NavigationItem>
            });
        }

        let authors = null;
        if(this.props.isAuthorsLoaded) {
            authors = this.props.authors.map(author => {
                return <NavigationItem
                            key={author.id}
                            link={`/authors/${author.id}`}
                            exact
                            >{author.name.toUpperCase()}</NavigationItem>
            });
        }
        return (
            <ul className={classes.NavigationItems}>
                <div className={classes.dropdown}>
                    <NavigationItem
                        link="/" 
                        exact
                        className={classes.dropdownBtn}
                        >CATEGORIES</NavigationItem>
                    <div className={classes.dropdownContent}>
                        {categories}
                    </div>
                </div>
                <div className={classes.dropdown}>
                    <NavigationItem
                        link="/authors" 
                        exact
                        className={classes.dropdownBtn}
                        >AUTHORS</NavigationItem>
                    <div className={classes.dropdownContent}>
                        {authors}
                    </div>
                </div>
            </ul>        
        );
    }
}

NavigationItems.propTypes = propTypes;
NavigationItems.defaultProps = defaultProps;
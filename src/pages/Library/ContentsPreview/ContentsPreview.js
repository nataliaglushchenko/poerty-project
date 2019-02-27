import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryView from './CategoryView';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContentsPreview.module.css';

const propTypes = {
    onFetchRecommendedPoems: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    isRecommendedPoemsLoaded: PropTypes.bool.isRequired,
    recommendedPoems: PropTypes.array.isRequired
};

const defaultProps = {

};  

export default class ContentsPreview extends Component { 
    componentDidMount () {
        this.props.onFetchRecommendedPoems();
    }

    render () {        
        let topRecommendedPoems = this.props.loading ? <Spinner /> : null;
        topRecommendedPoems = this.props.isRecommendedPoemsLoaded ?
            <div className={classes.ContentsPreview}>
                {this.props.recommendedPoems.map(item => {
                    return ( 
                         <CategoryView 
                            key={item.category.id} 
                            categoryTitle={item.category.name}
                            categorySlug={item.category.slug}
                            poems={item.topPoems}
                            />
                    );
                })}
            </div>
            : null;       
                
        return (
            <div>
                {topRecommendedPoems}
            </div>
        );
    }
};

ContentsPreview.propTypes = propTypes;
ContentsPreview.defaultProps = defaultProps;
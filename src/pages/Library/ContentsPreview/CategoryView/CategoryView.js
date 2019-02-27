import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CategoryView.module.css';
import CategoryItem from './CategoryItem';

const CategoryView = (props) => {
    const items = props.poems.map(item => {
            return (
                <CategoryItem
                    key={item.poemId}
                    link={`/poems/${item.poemId}`}
                    exact
                >
                    <i>{item.author}</i> - {item.title}
                </CategoryItem>
            );
        });
    
    return (
        <div className={classes.CategoryView}>
            <div className={classes.Title}>
                <Link to={`/themes/${props.categorySlug}`}>{props.categoryTitle}</Link> 
            </div>
            <ul className={classes.Content}>
                {items}
            </ul> 
            <nav  className={classes.ShowAll}>
                <Link to={`/themes/${props.categorySlug}`}>>>></Link>
            </nav>            
        </div>     
    );
}   


export default CategoryView;


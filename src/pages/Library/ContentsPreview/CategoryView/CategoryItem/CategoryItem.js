import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
    return (
        <li className={classes.CategoryItem}>
            <NavLink 
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active}
            >
                {props.children}
            </NavLink>
        </li>
    );
}

export default CategoryItem;
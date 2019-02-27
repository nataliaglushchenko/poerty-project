import React, { Component } from 'react';

import Aux from '../Auxillary/Auxillary';
import ToolBar from '../../components/Navigation/Toolbar';

import classes from './Layout.module.css';

export default class Layout extends Component {
    render () {
        return (
            <Aux>
                <ToolBar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Toolbar } from './Toolbar';
import Modal from '../../UI/Modal/Modal';
import classes from './Toolbar.module.css';

configure({adapter: new Adapter()});

describe('<Toolbar />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Toolbar />);
    });
    it('renders one <Modal /> element', () => {
        wrapper.setProps({showAuthForm: true});
        expect(wrapper.find(Modal)).toHaveLength(1);
    });

    it('renders <div className={classes.Logout}>LOG OUT</div> element if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<div className={classes.Logout}>LOG OUT</div>)).toEqual(true);
    });

    it('renders <div className={classes.Login}>LOG IN</div> element if not authenticated', () => {
        wrapper.setProps({isAuthenticated: false});
        expect(wrapper.contains(<div className={classes.Login}>LOG IN</div>)).toEqual(true);
    });
});

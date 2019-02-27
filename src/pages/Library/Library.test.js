import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Library } from './Library';
import ContentsPreview from './ContentsPreview';
import classes from './Library.module.css';

configure({adapter: new Adapter()});

describe('<Library />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Library />);
    });
    
    it('renders <div className={classes.Greeting}>Hello, <i>{this.props.userData.userName}</i></div> element if authenticated', () => {
        wrapper.setProps({isAuthenticated: true, userData: { userName: ''}});
        expect(wrapper.exists('.Greeting')).toEqual(true);
    });
    it('does not render <div className={classes.Greeting}>Hello, <i>{this.props.userData.userName}</i></div> element if authenticated', () => {
        wrapper.setProps({isAuthenticated: false});
        expect(wrapper.exists('.Greeting')).toEqual(false);
    });
    it('renders one <ContentsPreview /> element', () => {
        expect(wrapper.find(ContentsPreview)).toHaveLength(1);
    })
    it('renders a <Link to="/new" /> element', () => {
        expect(wrapper.contains(<Link to="/new">OR CREATE YOUR OWN POEM!</Link>)).toEqual(true);
    })
});

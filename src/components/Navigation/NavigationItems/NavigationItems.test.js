import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavigationItems } from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems onFetchCategories={() => {}} onFetchAuthors={() => {}}/>);
    });
    it('renders <NavigationItem link="/authors" /> element', () => {
        // wrapper.setProps({isAuthorsLoaded: true, authors: []});
        expect(wrapper.contains(
            <NavigationItem 
                link="/authors" 
                exact
                className={classes.dropdownBtn}
                >AUTHORS
            </NavigationItem>)).toEqual(true);
    });
});

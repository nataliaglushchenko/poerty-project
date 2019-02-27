import React from 'react';
import { Formik } from 'formik';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NewPoem } from './NewPoem';

configure({adapter: new Adapter()});

describe('<NewPoem />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NewPoem />);
    });    
    it('renders <div>You can create a Poem only if you are authenticated!</div> element if not authenticated', () => {
        wrapper.setProps({isAuthenticated: false});
        expect(wrapper.contains(<div style={{textAlign: "center", padding: "30px"}}>You can create a Poem only if you are authenticated!</div>)).toEqual(true);
    });
});

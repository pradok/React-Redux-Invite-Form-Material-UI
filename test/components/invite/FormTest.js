/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import createComponent, {getStore} from 'helpers/shallowRenderHelper';
import {reducers} from "../../../src/reducers";

import Form from 'components/invite/Form';

describe('Invite FormComponent', () => {
    let FormComponent;
    let props;

    beforeEach(() => {
        props = {
            store: getStore(reducers)
        };
        FormComponent = shallow(<Form {...props} />);
    });

    it('should have its component name as default className', () => {
        console.log(FormComponent.find('.form--invite'));
        
    });
});


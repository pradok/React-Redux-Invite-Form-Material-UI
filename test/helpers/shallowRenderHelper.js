/**
 * Function to get the shallow output for a given component
 * As we are using phantom.js, we also need to include the fn.proto.bind shim!
 *
 * @see http://simonsmith.io/unit-testing-react-components-without-a-dom/
 * @author somonsmith
 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReduxPromise from 'redux-promise';
import {createStore, combineReducers, applyMiddleware} from 'redux';

export function getStore(mappingObject) {
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  return createStoreWithMiddleware(combineReducers(mappingObject));
}



/**
 * Get the shallow rendered component
 *
 * @param  {Object} component The component to return the output for
 * @param  {Object} props [optional] The components properties
 * @param  {Mixed} ...children [optional] List of children
 * @return {Object} Shallow rendered output
 */
export default function createComponent(component, props = {}, ...children) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
  return shallowRenderer.getRenderOutput();
}



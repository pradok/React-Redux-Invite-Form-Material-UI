import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';

import reducers from 'reducers/index';

require('normalize.css/normalize.css');
//require('styles/App.scss');

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app'));

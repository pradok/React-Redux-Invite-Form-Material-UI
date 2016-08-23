import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';

import reducers from 'reducers/index';

require('normalize.css/normalize.css');
//require('styles/App.scss');

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app'));

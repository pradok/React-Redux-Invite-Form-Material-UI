import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import testReducer from './reducertest';


const rootReducer = combineReducers({
    form: reduxFormReducer,
    test: testReducer
});

export default rootReducer;

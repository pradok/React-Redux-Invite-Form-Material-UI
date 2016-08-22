import { combineReducers } from 'redux';
import TestReducer from './reducertest';


const rootReducer = combineReducers({
    test: TestReducer
});

export default rootReducer;

import { combineReducers } from 'redux';

import reducerInvite from 'components/invite/reducers/reducerInvite';


const rootReducer = combineReducers({
    invite: reducerInvite
});

export default rootReducer;

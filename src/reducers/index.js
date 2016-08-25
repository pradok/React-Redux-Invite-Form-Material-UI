import { combineReducers } from 'redux';

import reducerInvite from 'components/invite/reducers/reducerInvite';

export const reducers = {
    invite: reducerInvite
};

const rootReducer = combineReducers(reducers);

export default rootReducer;

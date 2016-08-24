import { INVITE_POST } from '../actions/index';

const INITIAL_STATE = { };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case INVITE_POST:
            console.log('action.payload', action);
            if(action.payload.status == 200) {
                return { ...state, success: action.payload.data, error: false };
            }
            else {
                return { ...state, error: action.payload.response.data.errorMessage, success: false };
            }

        default:
            return state;
    }
}

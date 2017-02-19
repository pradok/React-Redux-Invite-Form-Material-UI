import { INVITE_POST } from '../actions/index';

const INITIAL_STATE = { };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case INVITE_POST:
            if(!action.payload.response && action.error) {
                return { ...state, error: action.payload.message, success: false };
            }
            if(action.payload.status == 200) {
                return { ...state, success: action.payload.data, error: false };
            }
            else {
                return { ...state, error: action.payload.response.data.message, success: false };
            }

        default:
            return state;
    }
}

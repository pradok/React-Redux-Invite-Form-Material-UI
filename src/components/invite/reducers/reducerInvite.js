import { INVITE_POST } from '../actions/index';

const INITIAL_STATE = { };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case INVITE_POST:
            return { ...state, invitePostResponse: action.payload.data, sendBtnDisable: false };
        default:
            return state;
    }
}

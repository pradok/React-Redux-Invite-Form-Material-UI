import axios from 'axios';

export const INVITE_POST = 'INVITE_POST';

const ROOT_URL = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com';

export function sendInvite(data) {
    const request = axios.post(`${ROOT_URL}/prod/fake-auth`, data);

    return {
        type: INVITE_POST,
        payload: request
    };
}

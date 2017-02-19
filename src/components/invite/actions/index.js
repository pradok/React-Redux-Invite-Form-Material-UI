import axios from 'axios';

export const INVITE_POST = 'INVITE_POST';

const ROOT_URL = 'http://localhost:3000';

export function sendInvite(data) {
    const request = axios.post(`${ROOT_URL}/invite`, data);

    return {
        type: INVITE_POST,
        payload: request
    };
}

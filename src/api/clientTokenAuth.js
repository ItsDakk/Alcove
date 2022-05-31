import { create } from 'apisauce';
import base64 from 'base-64';

const apiClient = (token, cancelToken) => ({
    baseURL: window.location.host === '127.0.0.1' || 'localhost' ? 'http://127.0.0.1:5000':'',
    headers: {
        Authorization: "Bearer " +token
    },
    cancelToken
})

export default apiClient
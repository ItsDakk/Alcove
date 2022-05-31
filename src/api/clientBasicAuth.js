import { create } from 'apisauce';
import base64 from 'base-64';

const apiClient = (email, password, cancelToken) => ({
    baseURL: window.location.host === '127.0.0.1' || 'localhost' ? 'http://127.0.0.1:5000':'',
    // Have to add in a header for our authorization - always a dictionary
    headers: {
        // Converting it from base-10 to base-64 config
        Authorization: "Basic " +base64.encode(email + ":" + password)
    },
    cancelToken
})

export default apiClient
import{ create } from 'apisauce';

const apiClient = (cancelToken) => ({
    baseURL: window.location.host === '127.0.0.1' || 'localhost' ? 'http://127.0.0.1:5000':'',
    cancelToken
})

export default apiClient
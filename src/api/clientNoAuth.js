import{ create } from 'apisauce';

const apiClient = (cancelToken) => ({
    baseURL: "https://cae-bootstore.herokuapp.com/",
    cancelToken
})

export default apiClient
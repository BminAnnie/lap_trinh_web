import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true,
});

axiosClient.interceptors.response.use((response) => {
    if (response?.data) {
        return response.data;
    }
    return response;
});

export default axiosClient;

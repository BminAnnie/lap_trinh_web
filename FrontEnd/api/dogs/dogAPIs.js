import axiosClient from '../axiosClient';

const dogAPIs = {
    getDogs: (params) => axiosClient.get('/dogs', { params }),
    getDog: (params) => axiosClient.get(`/dog`, { params }),
    searchDogs: (params) => axiosClient.get('/dogs/search', { params }),
    deleteDog: (id) => axiosClient.post('/dogs/delete', id),
};

export default dogAPIs;

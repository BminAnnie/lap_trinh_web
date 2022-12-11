import axiosClient from '../axiosClient';

const userApis = {
    deleteUser: (id) => axiosClient.post('/users/delete', id),
};

export default userApis;

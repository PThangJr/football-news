import axiosClient from './axiosClient';

const newsAPI = {
  register(data) {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },
  getUser() {
    const url = '/auth/information';
    return axiosClient.get(url);
  },
};
export default newsAPI;

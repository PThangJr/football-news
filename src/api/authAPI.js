import axiosClient from './axiosClient';

const newsAPI = {
  register(data) {
    const url = '/user/register';
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = '/user/login';
    return axiosClient.post(url, data);
  },
  getAccount() {
    const url = '/user/account';
    return axiosClient.get(url());
  },
};
export default newsAPI;

import axiosClient from './axiosClient';

const newsAPI = {
  getAll(params) {
    let { pagination, tournament = '/' } = params;
    const url = `/news${tournament}`;
    return axiosClient.get(url, { params: pagination });
  },
  getNewById(newsId) {
    const url = `/news/${newsId}`;
    return axiosClient.get(url);
  },
};
export default newsAPI;

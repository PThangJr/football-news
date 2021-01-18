import axiosClient from './axiosClient';

const newsAPI = {
  getAll(params) {
    const url = '/';
    return axiosClient.get(url, { params });
  },
  getNewById(newsId) {
    const url = `/${newsId}`;
    return axiosClient.get(newsId);
  },

  getPremierLeague(params) {
    const url = '/premier-league';
    return axiosClient.get(url, { params });
  },
  getLaLiga(params) {
    const url = '/la-liga';
    return axiosClient.get(url, { params });
  },
};
export default newsAPI;

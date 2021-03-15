import axiosClient from './axiosClient';

const newsAPI = {
  getAll(params) {
    let { pagination, tournament = '/' } = params;
    const url = `/news${tournament}`;
    return axiosClient.get(url, { params: pagination });
  },
  getNewBySlug(params) {
    const { slug } = params;
    const url = `/detail-new${slug}`;
    return axiosClient.get(url);
  },
  postLiked(params) {
    const { slug } = params;
    const url = `/detail-new/${slug}`;
    return axiosClient.post(url);
  },
};
export default newsAPI;

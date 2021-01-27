import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  header: {
    'Content-Type': 'application/json',
  },
});

const token = localStorage.getItem('access_token');
// console.log(token);
axiosClient.defaults.headers.common['Authorization'] = token;
export default axiosClient;
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log(config);
    return config; //Gắn token
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data; //Dữ liệu
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response);
    return Promise.reject(error.response);
  }
);

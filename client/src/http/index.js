import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });


axios.interceptors.request.use( (config) => {
    config.headers.authorization = localStorage.getItem('token')
    return config
});



// export default instance;
import Axios from 'axios';

const client = Axios.create({
    baseURL: "http://localhost:5000/api" 
  });

  export default client;
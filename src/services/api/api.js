import axios from 'axios';

let API_URL = process.env.REACT_APP_API_URL;

if (!API_URL && process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:4000/api/';
}

export default axios.create({
  baseURL: API_URL,
});

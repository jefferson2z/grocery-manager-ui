import axios from 'axios'

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api/' : process.env.API_URL;

export default axios.create({
    baseURL: API_URL
})
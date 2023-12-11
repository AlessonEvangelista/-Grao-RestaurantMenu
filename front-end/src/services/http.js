import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:89/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axiosInstance;
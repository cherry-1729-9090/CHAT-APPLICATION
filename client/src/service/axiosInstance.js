import axios from 'axios';


export const axiosInstance = axios.create({
    // need to replace this with the actual backend server url
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'Bearer ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});
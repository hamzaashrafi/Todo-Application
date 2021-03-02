import axios from 'axios';
const baseURL = 'http://localhost:5000';

export const httpRequst = axios.create({
    baseURL: baseURL
});


import axios from 'axios';

// mudar local host

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;
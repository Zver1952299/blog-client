import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4444'
});

instance.interceptors.request.use((confirm) => {
    confirm.headers.Authorization = window.localStorage.getItem('token');
    return confirm;
});

export default instance;
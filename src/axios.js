import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ksiegarnia-76725.firebaseio.com'
});

export default instance;
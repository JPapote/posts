import axios from 'axios';

const intance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

intance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM';

export default intance;
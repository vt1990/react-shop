import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yalantis-react-school.herokuapp.com/api/v1'
});

export default instance;
import axios, { Method, AxiosPromise } from 'axios';

export default (method: Method, url: string, data: {[index: string]: any}): AxiosPromise => axios({
    method: method,
    url,
    data
});
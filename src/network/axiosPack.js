import axios from 'axios'

export default function axiosPack(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    });

    instance.interceptors.request.use(config => {

      return config;
    }, error => {

      return error;
    });

    instance.interceptors.response.use(response => {

      return response.data;
    }, error => {

      return error;
    })

    instance(config).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

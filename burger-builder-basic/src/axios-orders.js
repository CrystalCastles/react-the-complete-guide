import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d7f82.firebaseio.com/'
});

export default instance;
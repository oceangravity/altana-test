import axios from 'axios';

const baseDomain = 'http://sva.talana.com:8000/api/';
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});

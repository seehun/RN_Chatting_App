import {create} from 'apisauce';

const baseURL = 'http://localhost:8081';
// http://localhost:8081
// https://127.0.0.1:8081

export const API = create({
  baseURL,
  withCredentials: true,
});

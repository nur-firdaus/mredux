import axios from 'axios';
import { Common } from '../constant/Common';

const apiClient = () => {
  const defaultOptions = {
    baseURL: Common.API_ENDPOINT,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };

  const instance = axios.create(defaultOptions);

  return instance;
};

export default apiClient();

// services.ts

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://cross-platform.rp.devfactory.com'  
});

export const getFollowingFeed = () => {
  return apiClient.get('/following'); 
}

export const getForYouFeed = () => {
  return apiClient.get('/for_you');
}

export const getAnswer = (id) => {
  return apiClient.get('/reveal', {
    params: { id } 
  });
}

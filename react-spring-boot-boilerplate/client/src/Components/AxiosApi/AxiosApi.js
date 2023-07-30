import axios from 'axios';

const AxiosApi = axios.create({
  baseURL: process.env.NODE_ENV === "development" 
  ? 'http://localhost:8080' 
  : 'https://urlshortnerbackend.as.r.appspot.com'
});

export const getOriginalUrl = async (url) => {
  
    const response = await AxiosApi.get(url);
    return response.data;
};

export const CreateShortUrl = async (url, data) => {
  
    const response = await AxiosApi.post(url, data);
    return response.data;
};

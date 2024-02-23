import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
});

export default instance;

import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com',
  headers: {
    "x-rapidapi-key": "__API_VALUE__",
    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
  }
});
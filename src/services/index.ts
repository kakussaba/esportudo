import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com',
  headers: {
    "x-rapidapi-key": "8f7a8949ecmshe11411d4c184b1ap1bab26jsnc3939e65391b",
    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
  }
});
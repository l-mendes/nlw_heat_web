import axios from 'axios';

type UrlType = string | undefined;

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as UrlType
});
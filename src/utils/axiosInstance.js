// axiosInstance.js
import axios from 'axios';
import { store } from '../store';
import { refreshAccessToken } from '../utils/api';
import { setAccessToken } from '../redux_features/user/user_slicer';
import { API_BASE_URL } from './api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // e.g., 'http://127.0.0.1:8000'
  withCredentials: true, // Add this to send cookies
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// Request interceptor: attach access token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle expired tokens
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshAccessToken();
        if (newToken) {
          store.dispatch(setAccessToken(newToken.access));
          originalRequest.headers['Authorization'] = `Bearer ${newToken.access}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError.response?.data || refreshError.message);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

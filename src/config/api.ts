const API_URL = 'https://api.yourapp.com';

export const api = {
  baseURL: API_URL,
  endpoints: {
    login: '/auth/login',
    register: '/auth/register',
    profile: '/user/profile',
  },
}; 
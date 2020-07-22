import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004',
});

const authInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/auth',
});

export const usersAPI = {
  getUsers: async (page, limit) => {
    const response = await instance.get(`/users`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return {
      data: response.data,
      total: response.headers['x-total-count'],
    };
  },
  followUser: async (userId, data) => {
    const response = await instance.put(`/users/${userId}`, data);
    return response;
  },
  unfollowUser: async (userId, data) => {
    const response = await instance.put(`/users/${userId}`, data);
    return response;
  },
};

export const profileAPI = {
  getPosts: async () => {
    const response = await instance.get('/posts');
    return response.data;
  },
  getProfile: async (userId) => {
    const response = await instance.get(`/users/${userId}`);
    return response.data;
  },
  getStatus: async (userId) => {
    const response = instance.get(`/status/${userId}`);
    return response;
  },
  updateStatus: async (userId, status) => {
    const response = instance.put(`/status/${userId}`, { status });
    return response;
  },
};

export const AuthAPI = {
  me: async () => {
    const response = await authInstance.get('/me');
    return response;
  },
  login: async (email, password, rememberMe) => {
    const response = await authInstance.post('/login', {
      email,
      password,
      rememberMe,
    });
    return response;
  },
  logout: async () => {
    const response = await authInstance.delete('/login');
    return response;
  },
};

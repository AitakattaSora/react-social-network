import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004',
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

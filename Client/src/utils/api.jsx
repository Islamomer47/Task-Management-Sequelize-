import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const registerUser = (userData) =>
  axios.post(`${API_URL}/users/register`, userData);
export const loginUser = (userData) =>
  axios.post(`${API_URL}/users/login`, userData);
export const createTask = (taskData, token) =>
  axios.post(`${API_URL}/tasks`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const getTasks = (token) =>
  axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateTask = (taskId, taskData, token) =>
  axios.put(`${API_URL}/tasks/${taskId}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteTask = (taskId, token) =>
  axios.delete(`${API_URL}/tasks/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

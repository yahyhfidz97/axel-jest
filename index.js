// api.js
const axios = require('axios');

const getUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

const createUser = async (user) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', user);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

const updateUser = async (userId, updatedUser) => {
  try {
    const response = await axios.put(`https://reqres.in/api/users/${userId}`, updatedUser);
    return response.data;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

const deleteUser = async (userId) => {
  try {
    await axios.delete(`https://reqres.in/api/users/${userId}`);
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };

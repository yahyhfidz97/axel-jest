



const { getUsers, createUser, updateUser, deleteUser } = require('./index');

describe('API', () => {
  test('should fetch users successfully', async () => {
    const response = await getUsers();
    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
    // Add more assertions as required
  });

  test('should create a new user successfully', async () => {
    const user = {
      name: 'John Doe',
      job: 'Software Engineer',
    };
    const response = await createUser(user);
    expect(response).toBeDefined();
    expect(response.name).toBe(user.name);
    expect(response.job).toBe(user.job);
    // Add more assertions as required
  });

  test('should update an existing user successfully', async () => {
    const userId = 2;
    const updatedUser = {
      name: 'Jane Doe',
      job: 'Product Manager',
    };
    const response = await updateUser(userId, updatedUser);
    expect(response).toBeDefined();
    expect(response.name).toBe(updatedUser.name);
    expect(response.job).toBe(updatedUser.job);
    // Add more assertions as required
  });

  test('should delete a user successfully', async () => {
    const userId = 2;
    await expect(deleteUser(userId)).resolves.not.toThrow();
    // Add more assertions as required
  });
});

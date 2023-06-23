// const request = require("supertest");
// const expect = require("chai").expect;

// api.js



// describe("Name of the group", () =>{
//     it('should', async () => {
//         const resp = await request("https://reqres.in/api/users");
    
        
//         console.log(resp["id"]);
//         // console.log("status code", resp.statusCode);
//         // expect(resp.statusCode).toBe(200);
//         // console.log("bodyResponse", resp.body);
//         // expect(resp.statusCode).to.equal(200);
//         // expect(resp.body).to.have.all.keys(
//         //     "userId",
//         //     "id",
//         //     "title",
//         //     "body"
//         // );
//         // expect(resp["body"]["userId"]).to.eql(1);
        

   
//     });
// })


// api.test.js
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

import { UsersApi } from '../api/usersAPI';
import { LoginApi } from '../api/loginAPI';
describe('API User Update Test', () => {
  const usersAPI = new UsersApi();
  let user = []
  const loginApi = new LoginApi();
  before(() => {
      cy.fixture('users').then((users) => {
          user = users;
          loginApi.login(user[0].email, user[0].password)
      })
      })
  
    it('should successfully update user data', () => {
      usersAPI.updateUser(2, user[0].name, user[0].job).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', user[0].name);
        expect(response.body).to.have.property('job', user[0].job);
      });
    });

    it('should successfully update user data without job', () => {
      usersAPI.updateUser(2, user[1].name, user[1].job).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', user[1].name);
        expect(response.body).to.have.property('job', user[1].job);
      });
    });

    it('should successfully update user without name', () => {
      usersAPI.updateUser(2, user[2].name, user[2].job).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', user[2].name);
        expect(response.body).to.have.property('job', user[2].job);
      });
    });

    it('should successfully update user with empty request body', () => {
      usersAPI.updateUser().then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
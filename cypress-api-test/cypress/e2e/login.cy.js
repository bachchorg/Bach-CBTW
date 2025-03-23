import { LoginApi } from '../api/loginAPI';
describe('API Login Test', () => {
    let user = [];
    const loginApi = new LoginApi();
    before(() => {
      cy.fixture('users').then((users) => {
          user = users;
      })
      })
  
    it('should successfully log in via API when enter valid credentials', () => {
      loginApi.login(user[0].email, user[0].password).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      });
    });

    it('should not log in via API when enter invalid username and password', () => {
      loginApi.login(user[1].email, user[1].password).then((response) => {
        expect(response.status).to.eq(400);
      });
    });

    it('should not log in via API when enter empty credentials', () => {
      loginApi.login(user[2].email, user[2].password).then((response) => {
        expect(response.status).to.eq(400);
      });
    });

  });
  
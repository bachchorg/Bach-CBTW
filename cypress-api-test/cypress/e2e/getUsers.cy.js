import { UsersApi } from '../api/usersAPI';
import { LoginApi } from '../api/loginAPI';
describe('API Testing - Users Endpoint', () => {
    const usersAPI = new UsersApi();
    let user = []
    const loginApi = new LoginApi();
    before(() => {
        cy.fixture('users').then((users) => {
            user = users;
            loginApi.login(user[0].email, user[0].password)
        })
        })

    it('should return user data a correct position', () => {
        usersAPI.getUser(2).then((response) => {
            usersAPI.validategetUserData(response)
            expect(response.body.data.id).to.eq(2);
            expect(response.body.data.email).to.eq('janet.weaver@reqres.in');
            expect(response.body.data.first_name).to.eq('Janet');
            expect(response.body.data.last_name).to.eq('Weaver');
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/2-image.jpg');
        })
        
    });

    it('should return an error for an empty position', () => {
        usersAPI.getUser('20').then((response) => {
            usersAPI.validateInvalidPage(response);

        });
    });

    it('should return an error for an invalid position', () => {
        usersAPI.getUser('ab#@#@$c').then((response) => {
            usersAPI.validateInvalidPage(response);

        });
    });
    

});
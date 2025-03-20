import {LoginPage} from '../pom/loginPage';
import {CreateChallenge} from '../pom/createchallengePage';
describe('Verify Create a challenge functionality', () => {
    const loginPage = new LoginPage()
    const createChallenge = new CreateChallenge()
    let user = []
    before(() => {
        cy.fixture('users').then((users) => {
            user = users;
            loginPage.loginSession(user[0].username,user[0].password)
        })
        
    })
    it('should fill the form with fixture data', () => {
      // Load the fixture data
      cy.fixture('createchallenge.json').then((formData) => {
        createChallenge.inputForm(
          formData.event,
          formData.title,
          formData.flag,
          formData.description,
          formData.image,
          formData.category,
          formData.points,
          formData.hdwsthis
        );
      });
    });
  });
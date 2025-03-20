import {MainPage} from '../pom/mainPage';
import {LoginPage} from '../pom/loginPage';
import {CreateChallenge} from '../pom/createchallengePage';
import { faker } from '@faker-js/faker';

function generateValidName() {
    let name;
    do {
      name = faker.person.fullName(); // Generates a random name
    } while (name.length < 4 || name.length > 64);
    return name;
  }

describe('Verify Create a challenge functionality', () => {
    const loginPage = new LoginPage()
    const createChallenge = new CreateChallenge()
    const mainPage = new MainPage()
    const randomTitle = generateValidName();
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
          randomTitle,
          formData.flag,
          formData.description,
          formData.image,
          formData.category,
          formData.points,
          formData.hdwsthis
        );
        cy.get('.card-header').first().invoke('text').should('contain',randomTitle)

        cy.get('.card-body').first().invoke('text').should('contain',formData.points)
      });


      mainPage.logout()


    });
  });
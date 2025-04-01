import {MainPage} from '../pom/mainPage';
import {LoginPage} from '../pom/loginPage';
import {CreateChallenge} from '../pom/createchallengePage';
import { faker } from '@faker-js/faker';

function generateValidName() {
    const Faker = new faker()
    let name;
    do {
      name = Faker.person.fullName(); // Generates a random name
    } while (name.length < 4 || name.length > 64);
    return name;
  }

describe('Verify Create a challenge functionality', () => {
    const loginPage = new LoginPage()
    const createChallenge = new CreateChallenge()
    const mainPage = new MainPage()
    const randomTitle = generateValidName();
    let user = []
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            user = users;
            loginPage.loginSession(user[0].username,user[0].password)
        })
        
    })
    it('Create a challenge and verify its existence in My Challenge', () => {
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

    it('Create a challenge failed when leaving all the field empty', () => {
      // Load the fixture data
      cy.fixture('createchallenge.json').then((formData) => {
        mainPage.navigatetoCreateChallenge();
        createChallenge.clickSubmit()
        cy.url().should('include', 'create');
        })

    });

    it('Create a challenge failed after inputting a Challenge that has already exist', () => {
      // Load the fixture data
      cy.fixture('createchallenge.json').then((formData) => {
        mainPage.navigatetoCreateChallenge();
        createChallenge.enterFlag(formData.flag);
        createChallenge.enterHdwsthis(formData.hdwsthis);
        createChallenge.clickSubmit();
        cy.get('.invalid-feedback').invoke('text').should('eq','Challenge with this title already exists.')
        })

    });

    it('Create a challenge failed after inputting not enough character length for How do we solve this', () => {
      // Load the fixture data
      cy.fixture('createchallenge.json').then((formData) => {
        mainPage.navigatetoCreateChallenge();
        createChallenge.enterFlag(formData.flag);
        createChallenge.enterHdwsthis('123');
        createChallenge.clickSubmit();
        cy.get('.invalid-feedback').invoke('text').should('contain','Challenge with this title already exists.')
        cy.get('.invalid-feedback').invoke('text').should('contain','Field must be between 20 and 2048 characters long.')
        })
      });

  });
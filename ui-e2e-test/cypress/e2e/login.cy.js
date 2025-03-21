import {LoginPage} from '../pom/loginPage';
describe('test login function', () => {
    const loginPage = new LoginPage()
    let user = []
    before(() => {
        cy.fixture('users').then((users) => {
            user = users;
        })
    })
    it('Login using correct credentials', () => {
        loginPage.login(user[0].username,user[0].password);
        cy.visit('/')
        cy.url().should('include', '/dashboard');
    })
    it('Login using incorrect credentials', () => {
        loginPage.login(user[2].username,user[2].password);
        cy.get('.invalid-feedback').should('be.visible').invoke('text').should('eq', 'User does not exist for this username')
    })
})
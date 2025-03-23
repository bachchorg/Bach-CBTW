export class LoginPage{
    elements = {
        usernameInput: () => cy.get('#identifier'),
        passwordInput: () => cy.get('#password'),
        submitButton: () => cy.get("button[type='submit']")
    };
    
    visit() {
        cy.visit('/user/login');
    };

    loginSession(username, password){
        cy.session([username, password],() => {
            this.visit()
            this.elements.usernameInput().type(username)
            this.elements.passwordInput().type(password)
            this.elements.submitButton().click()
            cy.url().should('include', '/dashboard');
        })
        cy.visit('/dashboard')
    }

    login(username, password){
            this.visit()
            this.elements.usernameInput().type(username)
            this.elements.passwordInput().type(password)
            this.elements.submitButton().click()
    }


}

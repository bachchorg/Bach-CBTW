export class LoginApi {
    login(email, password) {
      return cy.request({
        method: 'POST',
        url: '/api/login',
        body: { email, password },
        failOnStatusCode: false
      }).then((response) => {
        const token = response.body.token; // Assuming the token is in response.body.token
        Cypress.env('authToken', token); // Store token globally
      });
    }
    static getAuthHeader() {
        return { Authorization: `Bearer ${Cypress.env('authToken')}` };
      }
    }
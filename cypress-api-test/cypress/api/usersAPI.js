export class UsersApi {
    
    getUser(userId) {
        return cy.request({
            method: 'GET',
            url: `/api/users/${userId}`,
            headers: {Authorization: `Bearer ${Cypress.env('authToken')}`},
            failOnStatusCode: false
        });
    }

    updateUser(userId, name, job) {
        return cy.request({
          method: 'PUT',
          url: `/api/users/${userId}`,
          headers: {Authorization: `Bearer ${Cypress.env('authToken')}`},
          body: {
            name,
            job,
          },
          failOnStatusCode: false
        });
      }

    validategetUserData(response) {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property('id');
        expect(response.body.data).to.have.property('email');
        expect(response.body.data).to.have.property('first_name');
        expect(response.body.data).to.have.property('last_name');
        expect(response.body.data).to.have.property('avatar');
    }

    validateInvalidPage(response) {
        expect(response.status).to.eq(404);
    }
}


beforeEach(function () {
  cy.visit('https://www.themoviedb.org')
})

describe('Login TMDb', () => {
  it('Login with valid credentials', () => {
    cy.fixture('credentials').then((credentials) => {
      cy.get('.primary > :nth-child(3) > a').click()
      cy.get('#username').type(credentials.username);
      cy.get('#password').type(credentials.password);
      cy.get('#login_button').click();
      cy.get('.header > .inner_content > .content').should('be.visible')
    })
  })

  it('Login with invalid username', () => {
    cy.fixture('credentials').then((credentials) => {
      cy.get('.primary > :nth-child(3) > a').click()
      cy.get('#username').type(credentials.username1);
      cy.get('#password').type(credentials.password);
      cy.get('#login_button').click();
      cy.get('.error_status').should('be.visible')
    })
  })

  it('Login with invalid password', () => {
    cy.fixture('credentials').then((credentials) => {
      cy.get('.primary > :nth-child(3) > a').click()
      cy.get('#username').type(credentials.username);
      cy.get('#password').type(credentials.password1);
      cy.get('#login_button').click();
      cy.get('.error_status').should('be.visible')
    })
  })
})
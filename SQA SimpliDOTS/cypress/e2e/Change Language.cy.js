
beforeEach(function () {
  cy.visit('https://www.themoviedb.org')
  cy.fixture('credentials').then((credentials) => {
    cy.get('.primary > :nth-child(3) > a').click()
    cy.get('#username').type(credentials.username);
    cy.get('#password').type(credentials.password);
    cy.get('#login_button').click();
    cy.get('.header > .inner_content > .content').should('be.visible')
  })
})


it('Change Language to Bahasa', () => {
  cy.get('.translate > div').click();
  cy.wait(1000);
  cy.contains('English (en-US)').click({ force: true});
 cy.xpath('//*[@id="default_language_popup-list"]/span/input').should('be.visible');
  cy.get('#default_language_popup-list > .k-list-filter > .k-textbox').type('indonesian');
  // cy.get('#default_language_popup-list').click({ force: true });
  // cy.get('.k-textbox').type('indonesian');
  // cy.get('#default_language_popup-list > .k-list-filter > .k-textbox').type('indonesian');
});


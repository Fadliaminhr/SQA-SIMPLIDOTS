
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


it.only('mark as favorite', () => {
  cy.get('.dropdown_menu > :nth-child(1) > .no_click').click();
  cy.get('.k-animation-container > .k-group > .k-first > .k-link').click()
  cy.get('#page_1 > :nth-child(1)').click()
  cy.get('#favourite').click() // Menambahkan ke dalam favorit

  cy.visit('https://www.themoviedb.org/u/Fadliamin/favorites');
  cy.get('#card_movie_631bd66867dcc90082814ca2 > .image > .glyphicons_v2 > a > .poster').should('be.visible');
  
  
  
  // cy.get('.true > :nth-child(1)').click()
  // cy.contains('Paling Disuka').click({force :true})
  // cy.get('.false > .k-animation-container > .k-group > .k-first > .k-link').click({force :true}) 
  // cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler').click()
  //*[@id="original_header"]/div[1]/div/div[1]/div/img
  //*[@id="card_movie_631bd66867dcc90082814ca2"]/div[1]/div/a/imgvc 
  // cy.get('#card_movie_631bd66867dcc90082814ca2 > .details')
  // cy.get('#card_movie_631bd66867dcc90082814ca2 > .image > .glyphicons_v2 > a > .poster')

});


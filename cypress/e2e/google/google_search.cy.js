describe('Google search', () => {
    beforeEach(()=>{
        cy.intercept('GET', '**?q=cypress**').as('getSearchResults')
        cy.intercept('GET', '**cypress.io**').as('cypressPage')
        cy.visit('https://google.com')

        cy.get('#APjFqb')
          .as('searchField')
          .should('be.visible')
          .type('cypress{enter}')
    })

    it('types and hit keyboard Enter', () => {
        cy.get('@searchField')
        cy.wait('@getSearchResults')
    })

    it('types and clicks at cypress.io page', () =>{
        cy.get('@searchField')
        cy.contains('Cypress: JavaScript Component Testing and E2E Testing ...')
          .click()
        cy.wait('@cypressPage')
        
    })
})
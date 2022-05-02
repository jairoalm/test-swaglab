describe('SWAG Labs - Checkout scenarios', () => {
    beforeEach(() => cy.programmaticLogin())
  
    it('successfully goes through the checkout process', () => {
      cy.checkout()
      cy.contains('Checkout: Complete!')
        .should('be.visible')
      cy.contains('THANK YOU FOR YOUR ORDER')
        .should('be.visible')
    })
  })
  
  Cypress.Commands.add('checkout', () => {
    cy.dataTest('add-to-cart-sauce-labs-backpack')
      .click()
    cy.get('.shopping_cart_link')
      .click()
    cy.dataTest('checkout')
      .click()
    cy.dataTest('firstName')
      .type('Walmyr')
    cy.dataTest('lastName')
      .type('Filho')
    cy.dataTest('postalCode')
      .type('12345')
    cy.dataTest('continue')
      .click()
    cy.dataTest('finish')
      .click()
  })
  
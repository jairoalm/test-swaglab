/// <reference types="Cypress" />

describe('SWAG LABS', () => {

    beforeEach(() => cy.visit('/'))
    it('faz login com usuário padrão', () => {
        cy.login()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
        cy.contains('.title', 'Products').should('be.visible')
    })

    it('error on locked user', () => {
        cy.login('locked_out_user', Cypress.env('password'))
    
        cy.checkErrorMsg('Sorry, this user has been locked out.')
      })
    
      it('logs in with performance glitch user', () => {
        cy.login('performance_glitch_user', Cypress.env('password'))
    
        cy.validateSucessfullLogin()
      })
    
      it('error on invalid password', () => {
        cy.login(Cypress.env('user'), 'invalid')
    
        cy.checkErrorMsg('Username and password do not match')
      })
})

Cypress.Commands.add('validateSucessfullLogin', () => {
    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
    cy.contains('.title', 'Products')
      .should('be.visible')
})
  
    
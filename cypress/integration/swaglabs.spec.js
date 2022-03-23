/// <reference types="Cypress" />

describe('SWAG LABS', () => {

    beforeEach(() => cy.visit('/'))
    it('faz login com usuário padrão', () => {
        cy.get('[data-test="username"]').type()
        cy.get('[data-test="password"]').type()
        cy.get('[data-test="login-button"]').click()

    })
})
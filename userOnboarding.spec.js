describe('submit button works', () => {
    it('navigate to website', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('form is loaded', () => {
        cy.get('form')
        cy.get('[type="text"]')
        cy.get('[type="email"]')
        cy.get('[type="password"]')
        cy.get('a')
        cy.get('[type="checkbox"]')
        cy.get('button')
    })
    it('form inputs are empty', () => {
        cy.get('[type="text"]').should('be.empty')
        cy.get('[type="email"]').should('be.empty')
        cy.get('[type="password"]').should('be.empty')
        cy.get('[type="checkbox"]').should('not.be.checked')
        cy.get('button').should('not.be.disabled')
    })
    it('entered email data', () => {
        cy.get('[type="email"]').type('example@email.com').should('have.value', 'example@email.com')
    })
});
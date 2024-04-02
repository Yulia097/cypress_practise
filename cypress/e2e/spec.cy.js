/// <reference types = "Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://wikipedia.org');
    cy.get('#js-link-box-en').click();

    cy.get('#pt-createaccount-2');
    cy.get('#pt-login-2');
    cy.get('#vector-user-links-dropdown');
  });
});

import BasePage from './BasePage';
import HomePage from './HomePage';

class Landing extends BasePage {
  visit() {
    cy.visit('https://epicentrk.ua/');
  }

  getLinks() {
    return cy.get('.header__logo');
  }

  getNavBlock() {
    return cy.get('.header__cart-button');
  }

  getEnglishLangBtn() {
    return cy.get('#js-link-box-en');
  }

  clickEnglishLangBtn() {
    this.getEnglishLangBtn().click();
    return new HomePage();
  }
}

export default Landing;

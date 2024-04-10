import BasePage from './BasePage';
import HomePage from './HomePage';

class HomePage extends BasePage {
  getCreateAccount() {
    return cy.get('#pt-createaccount-2 a');
  }

  getLogIn() {
    return cy.get('#pt-login-2 a');
  }

  getThreeDots() {
    return cy.get('#vector-user-links-dropdown-checkbox');
  }

  getLogo() {
    return cy.get(".vector-header-start [href='/wiki/Main_Page'].mw-logo");
  }
}

export default HomePage;

import BasePage from './Base.Page';
import StoresPage from './StoresPage';
import DeliverPage from './DeliverPage';
class Landing extends BasePage {
  visit() {
    cy.visit('https://www.moyo.ua/ua');
  }

  getHeaderlinksRight() {
    return cy.get("div[class = 'header_section header_section--right'] a");
  }

  getHeaderlinksLeft() {
    return cy.get("div[class = 'header_section'] a");
  }

  getCatalog() {
    return cy.get("div[class = 'header_catalog_btn js-menu-btn']");
  }

  getSearchField() {
    return cy.get('#search-input');
  }

  getLogin() {
    return cy.get(
      "div[class = 'header_cabinet_link js-auth-modal-show auth-cabinet']"
    );
  }

  getFilter() {
    return cy.get(
      "div[class = 'header_actions_item header_actions_compare js-compare-list-btn']"
    );
  }

  getFavorites() {
    return cy.get(
      "div[class = 'header_actions_item header_actions_wish js-wish-list-btn']"
    );
  }

  getCabinetCart() {
    return cy.get(
      "div[class = 'header_actions_item header_actions_cart js-cart-btn'] "
    );
  }

  clickStoresBtn() {
    cy.get('ul.header_nav > li:nth-child(3)').click();
    return new StoresPage();
  }

  clickGetDeliverisBtn() {
    cy.get('ul.header_nav > li:nth-child(4)').click();
    return new DeliverPage();
  }
}

export default Landing;

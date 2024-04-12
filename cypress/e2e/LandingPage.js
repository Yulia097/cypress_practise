import BasePage from './Base.Page';
import StoresPage from './StoresPage';
import ReviewPage from './StoresPage';

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

  clickReviewBtn() {
    this.getBtnReview().click();
    return new ReviewPage();
  }

  // getStoreslink() {
  //   ('/html/body/div[1]/header/div[1]/div/div[2]/ul/li[3]/span');
  // }

  clickStoresBtn() {
    cy.contains('Магазини').click(); // Click on first el containing 'Welcome'
  }
}

export default Landing;

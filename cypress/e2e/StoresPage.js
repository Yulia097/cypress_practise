import BasePage from './Base.Page';

class StoresPage extends BasePage {
  getStores() {
    return cy.get("h1 [class='trade-network__shops-city js-city-main-title'] ");
  }

  storesBtn() {
    return cy.get("div[class ='trade-network__city-list js-tn-city-list']");
  }
}

export default StoresPage;

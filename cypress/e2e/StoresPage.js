import BasePage from './Base.Page';
class StoresPage extends BasePage {
  visit() {
    cy.visit('https://www.moyo.ua/ua/trade_network.html');
  }
  getStores() {
    return cy.get("div [class='trade-network__city-list js-tn-city-list'] a");
  }

  getLogo() {
    return cy.get("div[class='header_logo hash_links']a");
  }
}

export default StoresPage;

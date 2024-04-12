/// <reference types="Cypress" />
import Landing from './LandingPage';

describe('Moyo Landing Page', () => {
  it('checking the header links', () => {
    const moyoHome = new Landing();
    moyoHome.visit();

    moyoHome.getHeaderlinksRight().should('have.length', 7);
    moyoHome.getHeaderlinksRight().should('have.length', 7);
    moyoHome.getHeaderlinksLeft().should('have.length', 1);
    moyoHome.getCatalog().should('be.visible');
    moyoHome.getSearchField().should('be.visible');
    moyoHome.getLogin().should('be.visible');
    moyoHome.getFilter().should('be.visible');
    moyoHome.getFavorites().should('be.visible');
    moyoHome.getCabinetCart().should('be.visible');
  });

  it('navigates to Stores Page and checks citizes and url', () => {
    const moyoHome = new Landing();
    moyoHome.visit();
    const stores = moyoHome.clickStoresBtn();
    cy.url().should('eq', 'https://www.moyo.ua/ua/trade_network.html');
    stores.getStores().should('have.length', 46);
  });

  it('navigates to Delivers Page checks elements and url', () => {
    const moyoHome = new Landing();
    moyoHome.visit();
    const deliveries = moyoHome.clickGetDeliverisBtn();
    cy.url().should('eq', 'https://www.moyo.ua/ua/consumers.html');

    deliveries.getDeliveres();
    deliveries.getDeliveresTitle();
  });
});

/// <reference types="Cypress" />
import Landing from './LandingPage';
import StoresPage from './StoresPage';

describe('Moyo Landing Page', () => {
  it('checking the header links', () => {
    const moyoHome = new Landing();
    moyoHome.visit();

    moyoHome.getHeaderlinksRight().should('have.length', 7);
    moyoHome.getHeaderlinksRight().should();
    moyoHome.getHeaderlinksLeft().should('have.length', 1);
    moyoHome.getCatalog().should('be.visible');
    moyoHome.getSearchField().should('be.visible');
    moyoHome.getLogin().should('be.visible');
    moyoHome.getFilter().should('be.visible');
    moyoHome.getFavorites().should('be.visible');
    moyoHome.getCabinetCart().should('be.visible');
  });

  it('navigates to Review version and checks review elements', () => {
    const moyoHome = new Landing();
    moyoHome.visit();

    const stores = moyoHome.clickStoresBtn();
    stores.storesBtn().should('be.visible');
  });
});

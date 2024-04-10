/// <reference types="Cypress" />
import Landing from '../../LandingPage';
describe('WIkipedia', () => {
  it('navigates to home page in CHineese', () => {
    const wikiHome = new Landing();
    wikiHome.visit();

    wikiHome.getLinks().should('have.length', 10);
    // wikiHome.getNavBlock().find('a');
    // wikiHome.getLinks().eq(4).click();
  });

  it('navigates to English version and checks header elements', () => {
    const wikiHome = new Landing();
    wikiHome.visit();

    const homePage = wikiHome.clickEnglishLangBtn();
    homePage.getLogo().click();
  });
});

import BasePage from './Base.Page';
class DeliverPage extends BasePage {
  visit() {
    cy.visit('https://www.moyo.ua/ua/consumers.html');
  }

  getDeliveres() {
    cy.get('div [class="deliveries"]');
  }

  getDeliveresTitle() {
    cy.get('div [class="payment-delivery_section_title"]');
  }
}
export default DeliverPage;

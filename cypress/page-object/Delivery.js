/// <reference types="cypress" />

export class Delivery {
  elements = {
    deliverySectionHeader: () => cy.get(".delivery h2.delivery__title"),
    deliveryServices: () => cy.get(".delivery .col-lg-6"),
    paymentSectionHeader: () => cy.get(".payment h2.section-title"),
    paymentMethods: () => cy.get(".payment .col-lg-6"),
    deliveryInfoLink: () => cy.get(".block-item p a"),
  };

  checkDeliveryInfoLinks(text) {
    this.elements.deliveryInfoLink().each(($el, index, $list) => {
      cy.wrap($el).should("have.text", text).and("have.attr", "href");
    });
  }
}

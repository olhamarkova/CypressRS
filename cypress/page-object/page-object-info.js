/// <reference types="cypress" />

export class ProductPage {
  elements = {
    contentOnInfoPage: () => cy.get(".content "),
    productsGallery: () => cy.get(".gallery-section"),
    ourAdvantagesSection: () => cy.get("#advantages"),
    ctaSection: () => cy.get("#cta"),
  };

  checkContentOnProductPage() {
    this.elements.contentOnInfoPage().should("be.visible");
    this.elements.productsGallery().should("be.visible");
    this.elements.ourAdvantagesSection().should("be.visible");
    this.elements.ctaSection().should("be.visible");
  }
}

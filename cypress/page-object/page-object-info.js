/// <reference types="cypress" />

export class ProductPage {
  navigate(url) {
    cy.visit(url);
  }

  checkContent() {
    cy.get(".content ").should("be.visible");
  }

  checkGallery() {
    cy.get(".gallery-section").should("be.visible");
  }

  checkOurAdvSection() {
    cy.get(".advantages-section").should("be.visible");
  }
}

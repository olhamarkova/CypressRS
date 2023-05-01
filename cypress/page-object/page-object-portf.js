/// <reference types="cypress" />

export class PortfolioPage {
  openGallery(index) {
    cy.get(".img-popup").eq(index).click({ force: true });
  }

  navButtonValidation(button) {
    cy.get(`button.is-${button}`).should("be.visible");
  }

  nextPhoto() {
    cy.get("button.is-next").click({ force: true });
  }

  closeButtonValidation() {
    cy.get("button[title='Close']").should("be.visible");
  }

  closeGallery() {
    cy.get("button[title='Close']").click({ force: true });
  }

  checkHeader(text) {
    cy.get(".hero-parallax-section__title").should("have.text", text);
  }

  checkPhotosCount(count) {
    cy.get(".img-popup").should("have.length", count);
  }
}

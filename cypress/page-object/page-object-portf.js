/// <reference types="cypress" />

import { siteURLs } from "../fixtures/page-data.js";

export class PortfolioPage {
  navigate() {
    cy.visit(siteURLs.portfolio);
  }

  openGallery(index) {
    cy.get(".portfolio-gallery__item").eq(index).click({ force: true });
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
    cy.get(".portfolio-gallery__item").should("have.length", count);
  }
}

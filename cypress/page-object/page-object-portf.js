/// <reference types="cypress" />

import { contacts } from "../fixtures/page-data.js";

export class PortfolioPage {
  navigate() {
    cy.visit(contacts.portfolio);
  }

  openGallery() {
    cy.get(".portfolio-gallery__item").eq(1).click();
  }

  nextPhoto() {
    cy.get("button.is-next").click();
  }

  closeGallery() {
    cy.get("button[title='Close']").click();
  }
}

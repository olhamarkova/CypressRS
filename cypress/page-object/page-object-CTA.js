/// <reference types="cypress" />

import { siteURLs } from "../fixtures/page-data.js";

export class CallToAction {
  navigate() {
    cy.visit(siteURLs.blog);
  }

  scroll() {
    cy.get(".cta-section__content").scrollIntoView();
  }

  partnerButton() {
    cy.get(".btn-border").click();
  }

  goBack() {
    cy.go("back");
  }

  openForm() {
    cy.get(".cta-section__content .btn-accent").click();
  }

  closeModalWindow() {
    cy.get(".is-close-btn").click();
  }

  checkCTASectionContent() {
    cy.get(".cta-section__content").should("be.visible");
  }

  checkCTAHeader(text) {
    cy.get(".cta-section__content h3").should("have.text", text);
  }

  checkCTAButton() {
    cy.get(".cta-section__content .btn-accent").should("be.visible");
  }
}

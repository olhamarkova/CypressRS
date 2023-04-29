/// <reference types="cypress" />

export class SharedModules {
  goBack() {
    cy.go("back");
  }

  // CTA

  scroll() {
    cy.get(".cta-section__content").scrollIntoView();
  }

  partnerButton() {
    cy.get(".btn-border").click();
  }

  linkValidation(text) {
    cy.url().should("include", text);
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

  // Our Advantages

  ourAdvantagesCheck() {
    cy.get("#advantages").should("be.visible");
  }

  ourAdvantagesItems(count) {
    cy.get(".advantages-item").should("have.length", count);
  }

  // Reviews

  reviewTextValidation(index, text) {
    cy.get("#reviews-slider")
      .find(".reviews-item__inner")
      .eq(index)
      .should("include.text", text);
  }

  nextReview() {
    cy.get(".slider-button--next").click({ force: true });
  }

  // Call Back Form

  formButtonValidation() {
    cy.get("#wpforms-submit-135").should("be.visible");
  }

  openForm() {
    cy.contains("Замовити дзвінок").click({ force: true });
  }

  closeModalWindow() {
    cy.get(".is-close-btn").click();
  }

  // Contact Form

  // Messengers

  openMessengers() {
    cy.get(".messengers-btn-wrapper").click();
  }

  mesButtonValidation() {
    cy.get(".messengers-btn-wrapper").should("be.visible");
  }

  checkMessengersCount(count) {
    cy.get(".messengers-popup")
      .find(".messengers-popup__item")
      .should("have.length", count);
  }
}

/// <reference types="cypress" />

// Add Contact Form
export class SharedModules {
  elements = {
    mainCTASection: () => cy.get(".cta-section__content"),
    mainCTABorderButton: () => cy.get(".cta-section__content .btn-border"),
    mainCTASectionContent: () => cy.get(".cta-section__content"),
    mainCTAHeader: () => cy.get(".cta-section__content h3"),
    mainCTAAccentButton: () => cy.get(".cta-section__content .btn-accent"),
    ourAdvantagesSection: () => cy.get("#advantages"),
    ourAdvantagesItems: () => cy.get(".advantages-item"),
    reviewsSlider: () => cy.get("#reviews-slider"),
    nextReviewButton: () => cy.get(".slider-button--next"),
    previousReviewButton: () => cy.get(".slider-button--prev"),
    reviewItem: () => cy.get(".reviews-item__inner"),
    reviewAuthor: () => cy.get(".reviews-item__name"),
    callBackFormModal: () => cy.get("#wpforms-submit-135"),
    submitModalButton: () => cy.get("button[name='wpforms[submit]']"),
    closeModalButton: () => cy.get(".is-close-btn"),
    messengersMainButton: () => cy.get(".messengers-btn-wrapper"),
    messengersPopup: () => cy.get(".messengers-popup"),
    messengerItem: () => cy.get(".messengers-popup__item"),
  };

  validateCTASection(text, cta) {
    this.elements.mainCTASection().should("be.visible");
    this.elements.mainCTABorderButton().should("have.text", text);
    this.elements.mainCTAAccentButton().should("have.text", cta);
  }

  validateOurAdvantagesSection() {
    this.elements.ourAdvantagesSection().should("be.visible");
    this.elements.ourAdvantagesItems().should("have.length", 4);
  }

  goToNextReview() {
    this.elements.nextReviewButton().click({ force: true });
  }

  goToPreviousReview() {
    this.elements.previousReviewButton().click({ force: true });
  }

  closeModalWindow() {
    this.elements.closeModalButton().click();
  }

  validateMessengers() {
    this.elements.messengersMainButton().click();
    this.elements.messengersPopup().should("be.visible");
    this.elements.messengerItem().should("have.length", 6);
  }
}

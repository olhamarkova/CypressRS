/// <reference types="cypress" />

import { text } from "../fixtures/textsUA";

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
    callBackFormModal: () => cy.get("#modal-callback"),
    callBackFormTitle: () => cy.get(".modal-title"),
    nameFieldModal: () => cy.get("input[id='wpforms-135-field_1']"),
    numberFieldModal: () => cy.get("input[id='wpforms-135-field_2']"),
    submitModalButton: () => cy.get("button[name='wpforms[submit]']"),
    succesMessageModal: () => cy.get("#wpforms-confirmation-135"),
    closeModalButton: () => cy.get(".is-close-btn"),
    contactFormTitle: () => cy.get(".contacts-form__title"),
    contactFormNameField: () => cy.get("#wpforms-170-field_1"),
    contactFormPhoneField: () => cy.get("#wpforms-170-field_2"),
    contactFormEmailField: () => cy.get("#wpforms-170-field_6"),
    contactFormTextField: () => cy.get("#wpforms-170-field_5"),
    contactFormSubmitButton: () => cy.get("#wpforms-submit-170"),
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

  validateModalForm() {
    this.elements.callBackFormModal().should("be.visible");
    this.elements.callBackFormTitle().should("be.visible");
    this.elements.nameFieldModal().should("have.prop", "maxlength", 50);
    this.elements.numberFieldModal().click();
    this.elements
      .numberFieldModal()
      .should("have.prop", "placeholder", text.phoneNumberMask);
    this.elements.closeModalButton().should("be.visible");
    this.elements.submitModalButton().should("be.visible");
  }

  validateContactForm() {
    this.elements.contactFormTitle().should("be.visible");
    this.elements.contactFormNameField().should("have.prop", "maxlength", 50);
    this.elements.contactFormPhoneField().click();
    this.elements
      .contactFormPhoneField()
      .should("have.prop", "placeholder", text.phoneNumberMask);
    this.elements.contactFormEmailField().click();
    this.elements
      .contactFormEmailField()
      .should("have.prop", "placeholder", text.emailMask);
    this.elements.contactFormTextField().should("have.prop", "maxlength", 500);
    this.elements.contactFormSubmitButton().should("be.visible");
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

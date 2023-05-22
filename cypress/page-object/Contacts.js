/// <reference types="cypress" />

export class ContactsPage {
  elements = {
    companyAddress: () => cy.get(".col-xl-4:nth-child(1) .address__link"),
    companyPhoneNumbers: () => cy.get(".col-xl-4 :nth-child(2) .phones-item a"),
    companyEmail: () => cy.get(".col-xl-4 .emails-item__link"),
    schedule: () => cy.get(".col-xl-4 .schedule"),
    socialButtons: () => cy.get(".col-xl-4 .socials-link"),
    googleMap: () => cy.get("iframe"),
    contactForm: () => cy.get(".contacts-section__form"),
  };

  checkPhoneNumbersLinks() {
    this.elements.companyPhoneNumbers().each(($el, index, list) => {
      cy.wrap($el).should("have.attr", "href");
    });
  }

  checkNumbers(index, number) {
    this.elements
      .companyPhoneNumbers()
      .eq(index)
      .should("include.text", number);
  }

  checkEmail(email) {
    this.elements
      .companyEmail()
      .should("have.text", email)
      .and("have.attr", "href");
  }

  checkSocialsLinks() {
    this.elements.socialButtons().each(($el, index, list) => {
      cy.wrap($el).should("have.attr", "href");
    });
  }
}

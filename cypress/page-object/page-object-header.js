/// <reference types="cypress" />

export class Header {
  elements = {
    mainLogo: () => cy.get(".header__logo-img"),
    phoneNumbers: () =>
      cy.get(".header-top__right-contacts .phones-item__link"),
    email: () => cy.get(".header-top__right-contacts .emails-item__link"),
    schedule: () => cy.get(".schedule p"),
    mobileMenu: () => cy.get(".burger"),
  };

  validatePhoneNumbersLinks() {
    this.elements.phoneNumbers().each(($el, index, $list) => {
      cy.wrap($el).should("have.attr", "href");
    });
  }
}

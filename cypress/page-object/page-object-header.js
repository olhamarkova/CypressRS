/// <reference types="cypress" />

export class Header {
  //validation

  checkMainLogo() {
    cy.get(".header__logo-img").should("be.visible");
  }

  linkValidation(text) {
    cy.url().should("include", text);
  }

  contactSectionValidation() {
    cy.get(".phones:nth-child(1)").each(($el, index, $list) => {
      cy.wrap($el).find("a").should("have.attr", "href");
    });
  }

  phoneNumValidation(text) {
    cy.get(".header-top__right-contacts")
      .find(".phones-item__link")
      .should("include.text", text);
  }

  emailValidation(email) {
    cy.get(".header-top__right-contacts")
      .find(".emails-item__link")
      .should("include.text", email);
  }

  scheduleValidation(text) {
    cy.get(".schedule").should("include.text", text);
  }

  mobNavigation() {
    cy.get(".burger").should("be.visible");
  }
}

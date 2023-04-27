/// <reference types="cypress" />

import { contacts } from "../fixtures/contacts-data.js";
import { siteURLs } from "../fixtures/page-data.js";

export class Header {
  navigate() {
    cy.visit(siteURLs.url);
  }

  reload() {
    cy.get(".header__logo-img").click();
  }

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

  phoneNumValidation() {
    cy.get(".header-top__right-contacts")
      .find(".phones-item__link")
      .should("include.text", contacts.mainPhoneNum, contacts.managerPhoneNum);
  }

  emailValidation() {
    cy.get(".header-top__right-contacts")
      .find(".emails-item__link")
      .should("include.text", contacts.email);
  }

  scheduleValidation(text) {
    cy.get(".schedule").should("include.text", text);
  }

  mobNavigation() {
    cy.get(".burger").should("be.visible");
  }
}

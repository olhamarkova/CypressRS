/// <reference types="cypress" />

import { contacts } from "../fixtures/page-data.js";

export class ContactsPage {
  navigate() {
    cy.visit(contacts.contacts);
  }

  checkAddress(text) {
    cy.get(".col-xl-4:nth-child(1) .address__link")
      .should("include.text", text)
      .and("have.attr", "href");
  }

  checkPhoneNumbersCount(count) {
    cy.get(".col-xl-4 :nth-child(2) .phones-item").as("phoneNumbers");
    cy.get("@phoneNumbers").should("have.length", count);
  }

  checkPhoneNumbersLinks() {
    cy.get("@phoneNumbers").each(($el, index, list) => {
      cy.wrap($el).find("a").should("have.attr", "href");
    });
  }

  checkNumbers(index, number) {
    cy.get("@phoneNumbers").find("a").eq(index).should("include.text", number);
  }

  checkEmail(email) {
    cy.get(".col-xl-4 .emails-item__link")
      .should("have.text", email)
      .and("have.attr", "href");
  }

  checkSchedule(text) {
    cy.get(".col-xl-4 .schedule").should("include.text", text);
  }

  checkSocialsCount(count) {
    cy.get(".col-xl-4 .socials-link").as("socials");
    cy.get("@socials").should("have.length", count);
  }

  checkSocialsLinks() {
    cy.get("@socials").each(($el, index, list) => {
      cy.wrap($el).should("have.attr", "href");
    });
  }

  checkGoogleMap() {
    cy.get("iframe").should("be.visible");
  }

  checkForm() {
    cy.get(".contacts-section__form").should("be.visible");
  }
}

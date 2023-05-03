/// <reference types="cypress" />

import { Header } from "../../page-object/page-object-header.js";
import { contacts } from "../../fixtures/contacts-data.js";
import { text } from "../../fixtures/texts.js";

const header = new Header();

describe("Check the Header on Desktop", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.mainPage);
      cy.viewport(1920, 1080);
    });
  });

  it("Check the Logo", function () {
    header.elements.mainLogo().should("be.visible");
    cy.goToMainPage();
    cy.url().should("include", text.siteNameInUrl);
  });

  it("Check the Contacts Section", function () {
    header.validatePhoneNumbersLinks();
    header.elements
      .phoneNumbers()
      .eq(0)
      .should("have.text", contacts.managerPhoneNum);
    header.elements
      .phoneNumbers()
      .eq(1)
      .should("have.text", contacts.mainPhoneNum);
    header.elements.email().should("have.text", contacts.email);
    header.elements.schedule().should("include.text", text.schedule);
  });
});

describe("Check the Header on Mobile Screen", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.mainPage);
      cy.viewport(360, 800);
    });
  });

  it("Check the Logo", function () {
    header.elements.mainLogo().should("be.visible");
  });

  it("Check the Mobile Menu", function () {
    header.elements.mobileMenu().should("be.visible");
  });
});

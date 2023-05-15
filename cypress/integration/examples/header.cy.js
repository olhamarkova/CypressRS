/// <reference types="cypress" />

import { Header } from "../../page-object/page-object-header.js";
import { Menu } from "../../page-object/page-object-menu.js";
import { contacts } from "../../fixtures/contacts-data.js";
import { text } from "../../fixtures/textsUA.js";

const header = new Header();
const mainMenu = new Menu();

describe("Check the Header on Desktop", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url"));
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

  it("Check the Main Menu", function () {
    mainMenu.elements.mainMenu().should("be.visible");
    mainMenu.validateMainMenu();
  });
});

describe("Check the Header on Mobile Screen", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url"));
      cy.viewport(360, 800);
    });
  });

  it("Check the Logo", function () {
    header.elements.mainLogo().should("be.visible");
  });

  it("Check the Mobile Menu", function () {
    mainMenu.elements.mainMenu().should("not.be.visible");
    header.elements.mobileMenu().should("be.visible");
  });
});

/// <reference types="cypress" />

import { Footer } from "../../page-object/page-object-footer.js";
import { text } from "../../fixtures/textsUA.js";

const footer = new Footer();

describe("Check the Footer on Desktop", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url"));
      cy.viewport(1920, 1080);
    });
  });

  it("Check the Logo", function () {
    footer.elements.logoInFooter().click();
    cy.url().should("include", text.siteNameInUrl);
  });

  it("Check the Social Links", function () {
    footer.elements
      .socialLinks()
      .should("have.length", 4)
      .and("have.attr", "href");
  });

  it("Check the Menu", function () {
    footer.elements.navMenuTitle().should("have.text", text.navMenuInFooter);
    footer.elements
      .catalogMenuTitle()
      .should("have.text", text.catMenuInFooter);
    footer.elements
      .contactsMenuTitle()
      .should("have.text", text.contactMenuInFooter);
    footer.elements.catalogMenuItem().should("have.length", 7);
    footer.elements.navMenuItems().should("have.length", 7);
    footer.validateFooterMenuLinks();
  });

  it("Check the Contacts Section", function () {
    footer.validateContactsLinks();
    footer.validateEmailInFooter();
    footer.validateAddressInFooter();
  });

  it("Check the Privacy Policy link", function () {
    footer.validatePrivacyPolicyLink(text.privacyPolicy);
  });
});

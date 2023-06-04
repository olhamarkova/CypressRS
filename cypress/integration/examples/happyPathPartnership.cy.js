/// <reference types="cypress" />

import { Menu } from "../../page-object/MainMenu.js";
import { SharedModules } from "../../page-object/SharedModules.js";
import { Partnership } from "../../page-object/Partnership.js";
import { Prices } from "../../page-object/Prices.js";

const mainMenu = new Menu();
const partners = new Partnership();
const modules = new SharedModules();
const prices = new Prices();

describe("Check the customer happy path - Partnership", function () {
  before(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url") + this.data.partnership);
      cy.viewport(1920, 1080);
    });
  });

  it("Partnership happy path", function () {
    partners.validatePageBlocks();
    modules.elements.mainCTASection().should("be.visible");
    modules.elements.mainCTABorderButton().click();
    cy.url().should("include", this.data.catalog);
    mainMenu.elements.pricesMenuItem().click();
    cy.url().should("include", this.data.prices);
    prices.elements.downloadDocumentIcon().eq(1).click({ force: true });
    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/prays_vazy_2023_hrivna.pdf"
    ).should("exist");
    mainMenu.elements.contactsMenuItem().click();
    cy.url().should("include", this.data.contacts);
  });
});

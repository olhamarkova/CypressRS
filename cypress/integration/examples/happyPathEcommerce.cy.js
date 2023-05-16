/// <reference types="cypress" />

import { Filter } from "../../page-object/page-object-filter";
import { Menu } from "../../page-object/page-object-menu";
import { Catalog } from "../../page-object/page-object-catalog";
import { SharedModules } from "../../page-object/shared-modules";

const filter = new Filter();
const mainMenu = new Menu();
const catalog = new Catalog();
const modules = new SharedModules();

describe("Happy Path - order a Tombstone", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url"));
      cy.viewport(1920, 1080);
    });
  });

  it("Order a Tombstone", function () {
    mainMenu.elements.catalogMenuItem().eq(0).click();
    cy.url().should("include", this.data.catalog);
    filter.elements.filter().should("be.visible");
    filter.filterRedTombstonesForOne();
    catalog.elements.productTitle().eq(2).click({ force: true });
    catalog.elements
      .infoBlockLinks()
      .should("be.visible")
      .and("have.length", 3);
    catalog.openModalInfoContacts();
    catalog.elements.modalInfoContact().should("be.visible");
    catalog.closeModalInfoContacts();
    catalog.elements.ctaButton().click();
    modules.validateModalForm();
    modules.elements.nameFieldModal().type(this.data.customerName);
    modules.elements.numberFieldModal().type(this.data.customerPhone);
    modules.elements.submitModalButton().click({ force: true });
    cy.wait(2000);
    modules.elements.succesMessageModal().should("be.visible");
  });
});

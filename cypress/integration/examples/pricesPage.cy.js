/// <reference types="cypress" />

import { Prices } from "../../page-object/page-object-prices.js";

const pricesPage = new Prices();

describe("Check the Prices Page on Desktop", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.prices);
      cy.viewport(1920, 1080);
    });
  });

  it("Check the Table of Prices", () => {
    pricesPage.elements.pricesTable().should("be.visible");
    pricesPage.elements.priceTableRow().should("have.length", 10);
  });

  it("Check the Downloads Section", () => {
    pricesPage.elements.downloadsSection().should("be.visible");
    pricesPage.elements
      .downloadDocumenTitle()
      .should("have.length", 6)
      .and("have.attr", "href");
    pricesPage.elements
      .downloadDocumentIcon()
      .should("have.length", 6)
      .and("have.attr", "href");
  });
});

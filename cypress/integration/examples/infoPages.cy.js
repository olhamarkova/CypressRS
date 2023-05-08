/// <reference types="cypress" />

import { ProductPage } from "../../page-object/page-object-info.js";

const productPage = new ProductPage();

describe("Info Pages Check", () => {
  before(function () {
    cy.fixture("info-pages").then(function (data) {
      this.data = data;
    });
  });

  it("Check content on Info Pages", function () {
    this.data.links.forEach(function (element) {
      let url;
      url = element;
      cy.openPage(Cypress.env("url") + url);
      productPage.checkContentOnProductPage();
    });
  });
});

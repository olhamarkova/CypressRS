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
    let url;
    this.data.links.forEach(function (element) {
      return (url = element);
    });
    cy.openPage(url);
    productPage.checkContentOnProductPage();
  });
});

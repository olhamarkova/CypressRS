/// <reference types="cypress" />

import { PortfolioPage } from "../../page-object/page-object-portf.js";
import { SharedModules } from "../../page-object/shared-modules.js";

const portfolio = new PortfolioPage();
const modules = new SharedModules();

describe("Check the Portfolio Page on Desktop", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.portfolio);
      cy.viewport(1920, 1080);
    });
  });

  it("Check the gallery", () => {
    portfolio.checkHeader("Наші роботи");
    portfolio.checkPhotosCount(20);
    portfolio.openGallery(2);
    portfolio.navButtonValidation("next");
    for (let n = 0; n < 5; n++) {
      portfolio.nextPhoto();
    }
    portfolio.navButtonValidation("prev");
    portfolio.closeButtonValidation();
    portfolio.closeGallery();
    modules.mesButtonValidation();
  });
});

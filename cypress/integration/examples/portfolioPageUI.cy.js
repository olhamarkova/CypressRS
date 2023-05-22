/// <reference types="cypress" />

import { PortfolioPage } from "../../page-object/Portfolio.js";

const portfolio = new PortfolioPage();

describe("Check the Portfolio Page on Desktop", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url") + this.data.portfolio);
      cy.viewport(1920, 1080);
    });
  });

  it("Check the gallery", () => {
    portfolio.elements.galleryImage().should("have.length", 20);
    portfolio.openGallery(2);
    portfolio.elements.nextPhotoButton().should("be.visible");
    portfolio.swipePhotos();
    portfolio.elements.closeGalleryButton().should("be.visible");
    portfolio.closeGallery();
    portfolio.elements.galleryImage().eq(0).should("be.visible");
  });
});

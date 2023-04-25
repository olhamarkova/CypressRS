/// <reference types="cypress" />

import { PortfolioPage } from "../../page-object/page-object-portf.js";

const portfolio = new PortfolioPage();

describe("Check the portfolio page", () => {
  it("Check the gallery", () => {
    portfolio.navigate();
    cy.get(".hero-parallax-section__title").should("have.text", "Наші роботи");
    cy.get(".portfolio-gallery__item").should("have.length", 20);
    portfolio.openGallery();
    for (let n = 0; n < 5; n++) {
      portfolio.nextPhoto();
    }
    portfolio.closeGallery();
    cy.get(".messengers-btn-wrapper").should("be.visible");
  });
});

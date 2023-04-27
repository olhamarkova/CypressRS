/// <reference types="cypress" />

export class Dimensions {
  desktopView() {
    cy.viewport(1920, 1080);
  }

  mobileView() {
    cy.viewport(360, 800);
  }
}

/// <reference types="cypress" />

import { contacts } from "../fixtures/page-data.js";

export class MainPage {
  navigate() {
    cy.visit(contacts.url);
  }
  viewPort() {
    cy.viewport(1280, 750);
  }

  scrollToFooter() {
    cy.get(".footer-top").scrollIntoView();
  }
}

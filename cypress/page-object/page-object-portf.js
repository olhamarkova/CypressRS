/// <reference types="cypress" />

import { contacts } from "../fixtures/page-data.js";

export class PortfolioPage {
  navigate() {
    cy.visit(contacts.portfolio);
  }
}

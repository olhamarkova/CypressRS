/// <reference types="cypress" />

import { contacts } from "../fixtures/page-data.js";

export class Delivery {
  navigate() {
    cy.visit(contacts.delivery);
  }
}

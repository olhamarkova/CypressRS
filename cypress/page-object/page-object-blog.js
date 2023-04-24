/// <reference types="cypress" />

import { contacts } from "../fixtures/page-data.js";

export class Blog {
  navigate() {
    cy.visit(contacts.blog);
  }

  scroll() {
    cy.get(".cta-section__content").scrollIntoView();
  }
}

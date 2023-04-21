/// <reference types="cypress" />

import { contacts } from "../../fixtures/page-data.js";

describe("Check the Delivery page", () => {
  it("Should have correct headers", () => {
    cy.visit(contacts.delivery);
    cy.get(".delivery h2.delivery__title").should(
      "have.text",
      "Способи доставки:"
    );
    cy.get(".delivery .col-lg-6").should("have.length", 4);

    cy.get(".payment h2.section-title").should("have.text", "Способи оплати:");
    cy.get(".payment .col-lg-6").should("have.length", 3);

    cy.get(".block-item p a").each(($el, index, $list) => {
      cy.wrap($el).should("have.text", "тарифами").and("have.attr", "href");
    });
  });
});

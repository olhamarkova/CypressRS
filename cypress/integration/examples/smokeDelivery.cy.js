/// <reference types="cypress" />

import { Delivery } from "../../page-object/page-object-delivery.js";

const delivPage = new Delivery();

describe("Check the Delivery page", () => {
  beforeEach(() => {
    delivPage.navigate();
  });

  it("Check the Delivery Section", () => {
    cy.get(".delivery h2.delivery__title").should(
      "have.text",
      "Способи доставки:"
    );
    cy.get(".delivery .col-lg-6").should("have.length", 4);
  });

  it("Check the Payment Section", () => {
    cy.get(".payment h2.section-title").should("have.text", "Способи оплати:");
    cy.get(".payment .col-lg-6").should("have.length", 3);
  });

  it("Check the links", () => {
    cy.get(".block-item p a").each(($el, index, $list) => {
      cy.wrap($el).should("have.text", "тарифами").and("have.attr", "href");
    });
  });
});

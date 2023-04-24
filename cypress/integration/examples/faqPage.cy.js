/// <reference types="cypress" />

import { contacts } from "../../fixtures/page-data.js";

describe("Check the FAQ page", () => {
  beforeEach(() => {
    cy.visit(contacts.faq);
  });

  it("Check the Header", () => {
    cy.get(".hero-parallax-section__title").should(
      "have.text",
      "Питання та відповіді"
    );
  });

  it("Check the Sections", () => {
    cy.get(".spoller-item__content").should("have.length", 17);
    cy.get("div[itemprop='text']").each(($el, index, $list) => {
      if (index !== 0) {
        cy.wrap($el).should("not.be.visible");
      }
    });
  });

  it("Check the First Section", () => {
    cy.get(".spoller-item__content p").eq(0).should("be.visible");
    cy.get(".spoller-item__button-icon").eq(0).click();
    cy.get(".spoller-item__content p").eq(0).should("not.be.visible");
  });
});

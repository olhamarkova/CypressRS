/// <reference types="cypress" />

import { Blog } from "../../page-object/page-object-blog.js";

const blogPage = new Blog();

describe("Check the Call to Action section", () => {
  beforeEach(() => {
    blogPage.navigate();
    blogPage.scroll();
  });

  it("Check the Call to Action section", () => {
    cy.get(".cta-section__content").should("be.visible");
    cy.get(".cta-section__content h3").should(
      "have.text",
      "Запрошуємо до співпраці з нами!"
    );
  });

  it("Check the Buttons", () => {
    blogPage.partnerButton();
    cy.url().should("contain", "spivpraczya");
    blogPage.goBack();
    blogPage.openForm();
    cy.get("#wpforms-submit-135").should("be.visible");
    blogPage.closeModalWindow();
    cy.get(".cta-section__content .btn-accent").should("be.visible");
  });
});

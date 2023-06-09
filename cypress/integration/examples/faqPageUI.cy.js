/// <reference types="cypress" />

import { FAQPage } from "../../page-object/FAQ.js";
import { text } from "../../fixtures/textsUA.js";

const FAQ = new FAQPage();

describe("Check the FAQ page", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url") + this.data.faq);
    });
  });

  it("Check the Header", function () {
    FAQ.elements.mainHeader().should("have.text", text.FAQTitle);
  });

  it("Check the Sections", function () {
    FAQ.elements.questionSection().should("have.length", 17);
    FAQ.validateHiddenSections();
  });

  it("Check the First Section", function () {
    FAQ.openFirstAnswer(0, true);
    FAQ.closeSection(0);
    FAQ.openFirstAnswer(0, false);
  });
});

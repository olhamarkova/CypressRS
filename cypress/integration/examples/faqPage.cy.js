/// <reference types="cypress" />

import { FAQPage } from "../../page-object/page-object-faq.js";

const FAQ = new FAQPage();

describe("Check the FAQ page", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.faq);
    });
  });

  it("Check the Header", function () {
    FAQ.elements.mainHeader().should("have.text", "Питання та відповіді");
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

/// <reference types="cypress" />

import { SharedModules } from "../../page-object/SharedModules.js";

const form = new SharedModules();

describe("Check content on the Contact Page", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url") + this.data.contacts);
    });
  });

  it("Check the error if the contact form is empty", function () {
    form.elements.contactFormNameField().should("have.value", "");
    form.elements.contactFormEmailField().should("have.value", "");
    form.elements.contactFormPhoneField().should("have.value", "");
    form.elements.contactFormTextField().should("have.value", "");
    form.elements.contactFormSubmitButton().should("be.visible").click();
    form.elements
      .contactFormNameField()
      .should("have.css", "border", "1px solid rgb(13, 202, 240)");
    form.elements
      .contactFormPhoneField()
      .should("have.css", "border", "1px solid rgb(196, 40, 38)");
  });
});

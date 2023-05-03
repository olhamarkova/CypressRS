/// <reference types="cypress" />

import { ContactsPage } from "../../page-object/page-object-contacts.js";
import { contacts } from "../../fixtures/contacts-data.js";
import { text } from "../../fixtures/texts.js";

const contPage = new ContactsPage();

describe("Check content on the Contact Page", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.contacts);
    });
  });

  it("Check the Address", function () {
    contPage.elements
      .companyAddress()
      .should("include.text", contacts.city)
      .and("have.attr", "href");
  });

  it("Check the Phone Numbers", function () {
    contPage.elements.companyPhoneNumbers().should("have.length", 3);
    contPage.checkPhoneNumbersLinks();
    contPage.checkNumbers(0, contacts.managerPhoneNum);
    contPage.checkNumbers(1, contacts.mainPhoneNum);
    contPage.checkNumbers(2, contacts.finDirNum);
  });

  it("Check the Email", function () {
    contPage.checkEmail(contacts.email);
  });

  it("Check the Schedule", function () {
    contPage.elements.schedule().should("include.text", text.schedule);
  });

  it("Check the Social Buttons", function () {
    contPage.elements.socialButtons().should("have.length", 4);
    contPage.checkSocialsLinks();
  });

  it("Check the Map", function () {
    contPage.elements.googleMap().should("be.visible");
  });

  it("Check the Contact Form", function () {
    contPage.elements.contactForm().should("be.visible");
  });
});

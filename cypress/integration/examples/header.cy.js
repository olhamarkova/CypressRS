/// <reference types="cypress" />

import { Header } from "../../page-object/page-object-header.js";
import { contacts } from "../../fixtures/contacts-data.js";

const header = new Header();

describe("Check the Header on Desktop", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.mainPage);
      cy.viewport(1920, 1080);
    });
  });

  it("Check the logo", function () {
    header.checkMainLogo();
    cy.goToMainPage();
    header.linkValidation("royalstone");
  });

  it("Check the Contacts Section", function () {
    header.contactSectionValidation();
    header.phoneNumValidation(contacts.managerPhoneNum, contacts.mainPhoneNum);
    header.emailValidation(contacts.email);
    header.scheduleValidation("Графік роботи:");
  });
});

describe("Check the Header on Mobile Screen", function () {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.mainPage);
      cy.viewport(360, 800);
    });
  });

  it("Check the Logo", function () {
    header.checkMainLogo();
  });

  it("Check the Contacts Section", function () {
    header.contactSectionValidation();
    header.phoneNumValidation(contacts.managerPhoneNum, contacts.mainPhoneNum);
  });

  it("Check the Mobile Menu", function () {
    header.mobNavigation();
  });
});

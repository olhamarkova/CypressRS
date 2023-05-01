/// <reference types="cypress" />

import { ContactsPage } from "../../page-object/page-object-contacts.js";
import { contacts } from "../../fixtures/contacts-data.js";

const contPage = new ContactsPage();

describe("Check content on the Contact Page", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.contacts);
    });
  });

  it.only("Check the Address", function () {
    contPage.checkAddress("Коростишів");
  });

  it("Check the Phone Numbers", function () {
    contPage.checkPhoneNumbersCount(3);
    contPage.checkPhoneNumbersLinks();
    contPage.checkNumbers(0, contacts.managerPhoneNum);
    contPage.checkNumbers(1, contacts.mainPhoneNum);
    contPage.checkNumbers(2, contacts.finDirNum);
  });

  it("Check the Email", function () {
    contPage.checkEmail(contacts.email);
  });

  it("Check the Schedule", function () {
    contPage.checkSchedule("Графік роботи:");
  });

  it("Check the Social Buttons", function () {
    contPage.checkSocialsCount(4);
    contPage.checkSocialsLinks();
  });

  it("Check the Map", function () {
    contPage.checkGoogleMap();
  });

  it("Check the Contact Form", function () {
    contPage.checkForm();
  });
});

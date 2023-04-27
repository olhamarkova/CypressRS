/// <reference types="cypress" />

import { ContactsPage } from "../../page-object/page-object-contacts.js";
import { contacts } from "../../fixtures/contacts-data.js";

const contPage = new ContactsPage();

describe("Check content on the Contact Page", () => {
  beforeEach(() => {
    contPage.navigate();
  });

  it("Check the Address", () => {
    contPage.checkAddress("Коростишів");
  });

  it("Check the Phone Numbers", () => {
    contPage.checkPhoneNumbersCount(3);
    contPage.checkPhoneNumbersLinks();
    contPage.checkNumbers(0, contacts.managerPhoneNum);
    contPage.checkNumbers(1, contacts.mainPhoneNum);
    contPage.checkNumbers(2, contacts.finDirNum);
  });

  it("Check the Email", () => {
    contPage.checkEmail(contacts.email);
  });

  it("Check the Schedule", () => {
    contPage.checkSchedule("Графік роботи:");
  });

  it("Check the Social Buttons", () => {
    contPage.checkSocialsCount(4);
    contPage.checkSocialsLinks();
  });

  it("Check the Map", () => {
    contPage.checkGoogleMap();
  });

  it("Check the Contact Form", () => {
    contPage.checkForm();
  });
});

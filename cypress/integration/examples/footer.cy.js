/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";

const mainPage = new MainPage();

describe("Check the main page", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.viewPort();
  });

  it("Check the Logo", () => {
    mainPage.scrollToFooter();
    mainPage.checkLogo();
  });

  it("Check the Social Links", () => {
    mainPage.scrollToFooter();
    mainPage.checkSocialsCount(4);
  });

  it("Check the Menu", () => {
    mainPage.scrollToFooter();
    mainPage.footerMenuValidation("Навігація");
    mainPage.footerMenuCount(7);
    mainPage.footerMenuLinksVal();
  });

  it("Check the Contacts Section", () => {
    mainPage.contactsLinksCheck();
    mainPage.checkEmail();
    mainPage.checkAddress("Коростишів");
  });

  it("Check the Privacy Policy link", () => {
    mainPage.checkPrivacyPolicy("Політика конфіденційності");
  });
});

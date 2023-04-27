/// <reference types="cypress" />

import { Footer } from "../../page-object/page-object-footer.js";
import { Dimensions } from "../../page-object/dimensions.js";

const footer = new Footer();
const screen = new Dimensions();

describe("Check the Footer on Desktop", () => {
  beforeEach(() => {
    footer.navigate();
    screen.desktopView();
  });

  it("Check the Logo", () => {
    footer.scrollToFooter();
    footer.checkLogo();
  });

  it("Check the Social Links", () => {
    footer.scrollToFooter();
    footer.checkSocialsCount(4);
  });

  it("Check the Menu", () => {
    footer.scrollToFooter();
    footer.footerMenuValidation(2, "Навігація");
    footer.footerMenuValidation(3, "Каталог");
    footer.footerContactsHeaderValidation("Контакти");
    footer.footerMenuCount(1, 7);
    footer.footerMenuCount(2, 7);
    footer.footerMenuLinksVal();
  });

  it("Check the Contacts Section", () => {
    footer.contactsLinksCheck();
    footer.checkEmail();
    footer.checkAddress("Коростишів");
  });

  it("Check the Privacy Policy link", () => {
    footer.checkPrivacyPolicy("Політика конфіденційності");
  });
});

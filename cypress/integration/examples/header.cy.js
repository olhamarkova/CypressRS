/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";

const mainPage = new MainPage();

describe("Check the Header", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.viewPort();
  });

  it("Check the logo", () => {
    mainPage.checkMainLogo();
    mainPage.reload();
    mainPage.linkValidation("royalstone");
  });

  it("Check the Contacts Section", () => {
    mainPage.contactSectionValidation();
    mainPage.phoneNumValidation();
    mainPage.emailValidation();
    mainPage.scheduleValidation("Графік роботи:");
  });
});

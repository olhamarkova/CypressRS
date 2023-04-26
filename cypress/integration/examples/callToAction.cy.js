/// <reference types="cypress" />

import { Blog } from "../../page-object/page-object-blog.js";
import { MainPage } from "../../page-object/page-object-main.js";

const blogPage = new Blog();
const mainPage = new MainPage();

describe("Check the Call to Action section", () => {
  beforeEach(() => {
    blogPage.navigate();
    blogPage.scroll();
  });

  it("Check the Call to Action section", () => {
    blogPage.checkCTASectionContent();
    blogPage.checkCTAHeader("Запрошуємо до співпраці з нами!");
  });

  it("Check the Buttons", () => {
    blogPage.partnerButton();
    mainPage.linkValidation("spivpraczya");
    blogPage.goBack();
    blogPage.openForm();
    mainPage.formButtonValidation();
    blogPage.closeModalWindow();
    blogPage.checkCTAButton();
  });
});

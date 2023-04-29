/// <reference types="cypress" />

import { CallToAction } from "../../page-object/page-object-CTA.js";
import { MainPage } from "../../page-object/page-object-main.js";

const ctaSection = new CallToAction();
const mainPage = new MainPage();

describe("Check the Call to Action section", () => {
  beforeEach(() => {
    ctaSection.navigate();
    ctaSection.scroll();
  });

  it("Check the Call to Action section", () => {
    ctaSection.checkCTASectionContent();
    ctaSection.checkCTAHeader("Запрошуємо до співпраці з нами!");
  });

  it("Check the Buttons", () => {
    ctaSection.partnerButton();
    mainPage.linkValidation("spivpraczya");
    ctaSection.goBack();
    ctaSection.openForm();
    mainPage.formButtonValidation();
    ctaSection.closeModalWindow();
    ctaSection.checkCTAButton();
  });
});

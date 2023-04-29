/// <reference types="cypress" />

import { SharedModules } from "../../page-object/shared-modules.js";
import { Blog } from "../../page-object/page-object-blog.js";

const url = new Blog();
const ctaSection = new SharedModules();

describe("Check the Call to Action section", () => {
  beforeEach(() => {
    url.navigate();
    ctaSection.scroll();
  });

  it("Check the Call to Action section", () => {
    ctaSection.checkCTASectionContent();
    ctaSection.checkCTAHeader("Запрошуємо до співпраці з нами!");
  });

  it("Check the Buttons", () => {
    ctaSection.partnerButton();
    ctaSection.linkValidation("spivpraczya");
    ctaSection.goBack();
    ctaSection.openForm();
    ctaSection.formButtonValidation();
    ctaSection.closeModalWindow();
    ctaSection.checkCTAButton();
  });
});

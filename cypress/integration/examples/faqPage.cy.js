/// <reference types="cypress" />

import { FAQPage } from "../../page-object/page-object-faq.js";

const FAQ = new FAQPage();

describe("Check the FAQ page", () => {
  beforeEach(() => {
    FAQ.navigate();
  });

  it("Check the Header", () => {
    FAQ.headerValidation("Питання та відповіді");
  });

  it("Check the Sections", () => {
    FAQ.checkQuestionsCount(17);
    FAQ.hiddenSectionsValidation();
  });

  it("Check the First Section", () => {
    FAQ.firstSectionValidation(0, true);
    FAQ.closeSection(0);
    FAQ.firstSectionValidation(0, false);
  });
});

/// <reference types="cypress" />

import { CallToAction } from "../../page-object/page-object-CTA.js";
import { ProductPage } from "../../page-object/page-object-info.js";
import { infoPages } from "../../fixtures/info-pages.js";

const page = new CallToAction();
const productPage = new ProductPage();

describe("Info Pages Check", () => {
  it("Info Pages", () => {
    let url;
    infoPages.forEach((el) => {
      url = el;
      productPage.navigate(url);
      productPage.checkContent();
      productPage.checkGallery();
      productPage.checkOurAdvSection();
      page.checkCTASectionContent();
    });
  });
});

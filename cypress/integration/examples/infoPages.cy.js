/// <reference types="cypress" />

import { SharedModules } from "../../page-object/shared-modules.js";
import { ProductPage } from "../../page-object/page-object-info.js";
import { infoPages } from "../../fixtures/info-pages.js";

const modules = new SharedModules();
const productPage = new ProductPage();

describe("Info Pages Check", () => {
  it("Info Pages", () => {
    let url;
    infoPages.forEach((el) => {
      url = el;
      productPage.navigate(url);
      productPage.checkContent();
      productPage.checkGallery();
      modules.ourAdvantagesCheck();
      modules.checkCTASectionContent();
      modules.mesButtonValidation();
    });
  });
});

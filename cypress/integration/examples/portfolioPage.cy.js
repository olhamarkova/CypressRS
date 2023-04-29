/// <reference types="cypress" />

import { PortfolioPage } from "../../page-object/page-object-portf.js";
import { SharedModules } from "../../page-object/shared-modules.js";
import { Dimensions } from "../../page-object/dimensions.js";

const portfolio = new PortfolioPage();
const modules = new SharedModules();
const viewport = new Dimensions();

describe("Check the Portfolio Page on Desktop", () => {
  it("Check the gallery", () => {
    portfolio.navigate();
    viewport.desktopView();
    portfolio.checkHeader("Наші роботи");
    portfolio.checkPhotosCount(20);
    portfolio.openGallery(2);
    portfolio.navButtonValidation("next");
    for (let n = 0; n < 5; n++) {
      portfolio.nextPhoto();
    }
    portfolio.navButtonValidation("prev");
    portfolio.closeButtonValidation();
    portfolio.closeGallery();
    modules.mesButtonValidation();
  });
});

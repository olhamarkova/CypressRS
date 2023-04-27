/// <reference types="cypress" />

import { PortfolioPage } from "../../page-object/page-object-portf.js";
import { MainPage } from "../../page-object/page-object-main.js";
import { Dimensions } from "../../page-object/dimensions.js";

const portfolio = new PortfolioPage();
const mainPage = new MainPage();
const viewport = new Dimensions();

describe("Check the Portfolio Page on Desktop", () => {
  it("Check the gallery", () => {
    portfolio.navigate();
    viewport.desktopView();
    portfolio.checkHeader("Наші роботи");
    portfolio.checkPhotosCount(20);
    portfolio.openGallery(2);
    for (let n = 0; n < 5; n++) {
      portfolio.nextPhoto();
    }
    portfolio.closeGallery();
    mainPage.mesButtonValidation();
  });
});

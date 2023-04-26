/// <reference types="cypress" />

import { PortfolioPage } from "../../page-object/page-object-portf.js";
import { MainPage } from "../../page-object/page-object-main.js";

const portfolio = new PortfolioPage();
const mainPage = new MainPage();

describe("Check the portfolio page", () => {
  it("Check the gallery", () => {
    portfolio.navigate();
    portfolio.checkHeader("Наші роботи");
    portfolio.checkPhotosCount(20);
    portfolio.openGallery();
    for (let n = 0; n < 5; n++) {
      portfolio.nextPhoto();
    }
    portfolio.closeGallery();
    mainPage.mesButtonValidation();
  });
});

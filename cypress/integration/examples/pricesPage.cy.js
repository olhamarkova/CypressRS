/// <reference types="cypress" />

import { Dimensions } from "../../page-object/dimensions.js";
import { Prices } from "../../page-object/page-object-prices.js";

const viewport = new Dimensions();
const pricesPage = new Prices();

describe("Check the Prices Page on Desktop", () => {
  beforeEach(() => {
    pricesPage.navigate();
    viewport.desktopView();
  });
  it("Check the Table of Prices", () => {
    pricesPage.tableCheck();
    pricesPage.tableRowsCheck(10);
  });

  it.only("Check the Downloads Section", () => {
    pricesPage.downloadsSectionCheck();
    pricesPage.countOfSectionsValidation(2);
    pricesPage.countOfFilesCheck("title", 6);
    pricesPage.checkLinks("title");
    pricesPage.countOfFilesCheck("icon", 6);
    pricesPage.checkLinks("icon");
  });
});

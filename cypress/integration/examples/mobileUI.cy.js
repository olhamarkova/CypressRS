/// <reference types="cypress" />

import { MainPage } from "../../page-object/MainPage.js";
import { Header } from "../../page-object/Header.js";
import { Menu } from "../../page-object/MainMenu.js";

const mainPage = new MainPage();
const header = new Header();
const mainMenu = new Menu();

describe("Check the Main Page on Mobile Screen", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url"));
      cy.viewport(360, 800);
    });
  });

  it("Check the Blog Section", () => {
    mainPage.elements.blogArticleItem().should("have.have.length", 3);
    mainPage.validateArticlesCountOnMobile();
    mainPage.elements.goToBlogButton().should("be.visible");
  });

  it("Check the Logo", function () {
    header.elements.mainLogo().should("be.visible");
  });

  it("Check the Mobile Menu", function () {
    mainMenu.elements.mainMenu().should("not.be.visible");
    header.elements.mobileMenu().should("be.visible");
  });
});

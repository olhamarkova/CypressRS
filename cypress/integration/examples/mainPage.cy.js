/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";
import { SharedModules } from "../../page-object/shared-modules.js";

const mainPage = new MainPage();
const modules = new SharedModules();

describe("Check the Main Page on Desktop", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.mainPage);
      cy.viewport(1920, 1080);
    });
  });

  it("Check the messenger's menu", () => {
    modules.mesButtonValidation();
    modules.openMessengers();
    modules.checkMessengersCount(6);
  });

  it("Check the Our Adventages Section", () => {
    modules.ourAdvantagesCheck();
    modules.ourAdvantagesItems(4);
  });

  it("Check the review block", () => {
    modules.nextReview();
    modules.reviewTextValidation(2, "Олександра");
  });

  it("Check the Blog Section", () => {
    mainPage.blogHeaderValidation("Наш блог");
    mainPage.checkArticlesCount(3);
  });

  it("Check the links in the Blog Section", () => {
    mainPage.checkBlogLink();
    mainPage.openBlog();
    mainPage.linkValidation("blog");
    mainPage.goBack();
    mainPage.linkValidation("royalstone");
    mainPage.openArticle(1);
    mainPage.breadcrumpsValidation("Наш блог");
  });

  it("Check the Catalog button", () => {
    mainPage.catalogButtonValidation("Наш каталог");
    mainPage.openCatalog();
    mainPage.linkValidation("catalog");
    mainPage.goBack();
    mainPage.linkValidation("royalstone");
  });

  it("Check the Call to Action button", () => {
    mainPage.callToActionValidation("Замовити дзвінок");
    modules.openForm();
    modules.formButtonValidation();
    modules.closeModalWindow();
    mainPage.heroSectionValidation();
  });
});

describe("Check the Main Page on Mobile Screen", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.mainPage);
      cy.viewport(360, 800);
    });
  });

  it("Check the Blog Section", () => {
    mainPage.checkArticlesCount(3);
    mainPage.mobCheckArticlesCount();
    mainPage.checkBlogLink();
  });
});

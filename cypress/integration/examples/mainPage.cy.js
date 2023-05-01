/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";
import { SharedModules } from "../../page-object/shared-modules.js";
import { Blog } from "../../page-object/page-object-blog.js";

const mainPage = new MainPage();
const modules = new SharedModules();
const articlePage = new Blog();

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
    mainPage.elements.blogArticleItem().should("have.have.length", 3);
  });

  it("Check the links in the Blog Section", () => {
    mainPage.elements
      .goToBlogButton()
      .should("be.visible")
      .and("have.attr", "href");
    mainPage.openBlog();
    cy.url().should("include", "blog");
    cy.return();
    cy.url().should("include", "royalstone");
    mainPage.openArticle(1);
    articlePage.elements.shareLinks().should("be.visible");
  });

  it("Check the Catalog button", () => {
    mainPage.elements
      .catalogButtonInHeroSection()
      .should("have.text", "Наш каталог");
    mainPage.openCatalog();
    cy.url().should("include", "catalog");
    cy.return();
    cy.url().should("include", "royalstone");
  });

  it("Check the Call to Action button", () => {
    mainPage.elements
      .ctaButtonInHeroSection()
      .should("have.text", "Замовити дзвінок");
    mainPage.openForm();
    modules.formButtonValidation();
    modules.closeModalWindow();
    mainPage.elements.heroSection().should("be.visible");
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
    mainPage.elements.blogArticleItem().should("have.have.length", 3);
    mainPage.validateArticlesCountOnMobile();
    mainPage.elements.goToBlogButton().should("be.visible");
  });
});

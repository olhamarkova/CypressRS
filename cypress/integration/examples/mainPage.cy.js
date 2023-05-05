/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";
import { SharedModules } from "../../page-object/shared-modules.js";
import { Blog } from "../../page-object/page-object-blog.js";
import { text } from "../../fixtures/texts.js";

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

  it("Check the Catalog button in Hero Section", () => {
    mainPage.elements
      .catalogButtonInHeroSection()
      .should("have.text", text.catalogButton);
    mainPage.openCatalogInHeroSection();
    cy.url().should("include", text.catalogPageUrl);
    cy.return();
    cy.url().should("include", text.siteNameInUrl);
  });

  it("Check the Call to Action button in Hero Section", () => {
    mainPage.elements
      .ctaButtonInHeroSection()
      .should("have.text", text.openFormButton);
    mainPage.openFormInHeroSection();
    modules.elements.submitModalButton().should("be.visible");
    modules.closeModalWindow();
    mainPage.elements.heroSection().should("be.visible");
  });

  it("Check the Catalog Section", () => {
    mainPage.elements
      .catalogCardItem()
      .should("be.visible")
      .and("have.length", 4);
    mainPage.elements.catalogItemTitle().eq(1).click({ force: true });
    cy.url().should("include", text.productCategoryUrl);
  });

  it("Check the Products Slider", () => {
    mainPage.elements.productSliderSection().should("be.visible");
    mainPage.elements.productCardButton().each((el) => {
      cy.wrap(el).click({ force: true });
      modules.elements.callBackFormModal().should("be.visible");
    });
  });

  it("Check the messenger's menu", () => {
    modules.validateMessengers();
  });

  it("Check the Our Adventages Section", () => {
    modules.validateOurAdvantagesSection();
  });

  it("Check the CTA Section", () => {
    modules.validateCTASection(text.catalogTitleButton, text.mainPageCtaButton);
    modules.elements.mainCTABorderButton().click({ force: true });
    cy.url().should("include", text.catalogPageUrl);
    cy.return();
    modules.elements.mainCTAAccentButton().click({ force: true });
    modules.elements.callBackFormModal().should("be.visible");
  });

  it("Check the Work Steps section", () => {
    mainPage.elements.workStepsSection().should("be.visible");
    mainPage.elements.workStepsItem().should("have.length", 8);
  });

  it("Check the review block", () => {
    modules.elements.reviewsSlider().should("be.visible");
    modules.elements
      .reviewAuthor()
      .eq(2)
      .should("have.text", text.secondCustomerName);
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
    cy.url().should("include", text.siteNameInUrl);
    mainPage.openArticle(1);
    articlePage.elements.shareLinks().should("be.visible");
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

/// <reference types="cypress" />

import { MainPage } from "../../page-object/MainPage.js";
import { SharedModules } from "../../page-object/SharedModules.js";
import { Blog } from "../../page-object/Blog.js";
import { text } from "../../fixtures/textsUA.js";
import { Menu } from "../../page-object/MainMenu.js";

const mainPage = new MainPage();
const modules = new SharedModules();
const articlePage = new Blog();
const menu = new Menu();

describe("Check the Main Page on Desktop", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url"));
      cy.viewport(1920, 1080);
    });
  });

  it("Check the Change Language Option", function () {
    menu.elements.chooseLanguageUkr().should("be.visible");
    menu.elements.chooseLanguageRu().should("be.hidden");
    menu.elements.chooseLanguageUkr().trigger("mouseover");
    menu.elements.chooseLanguageRu().click({ force: true });
    cy.url().should("include", "ru");
    menu.elements.chooseLanguageRu().should("be.visible");
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
    mainPage.openCatalogOnProductItem();
    cy.url().should("include", text.productCategoryUrl);
    cy.return();
    mainPage.openCatalogSectionButton();
    cy.url().should("include", text.catalogPageUrl);
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
    modules.validateModalForm();
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

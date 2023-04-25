/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";

const mainPage = new MainPage();

describe("Check the main page", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.viewPort();
  });

  it("Check the messenger's menu", () => {
    cy.get(".messengers-btn-wrapper").should("be.visible");
    mainPage.openMessengers();
    cy.get(".messengers-popup")
      .find(".messengers-popup__item")
      .should("have.length", 6);
  });

  it("Check the review block", () => {
    mainPage.nextReview();
    cy.get("#reviews-slider")
      .find(".reviews-item__inner")
      .eq(2)
      .should("include.text", "Олександра");
  });

  it("Check the Blog Section", () => {
    cy.get(".blog-home-section h2.section-title").should(
      "have.text",
      "Наш блог"
    );
    cy.get(".blog-item__top").should("have.length", 3);
  });

  it("Check the links in the Blog Section", () => {
    cy.get("a.section-link").should("have.attr", "href");
    mainPage.openBlog();
    cy.url().should("include", "blog");
    mainPage.goBack();
    cy.url().should("include", "royalstone");

    mainPage.openArticle();
    cy.get("a span[itemprop='name']").eq(1).should("have.text", "Наш блог");
  });

  it("Check the Catalog button", () => {
    cy.get(".btn-border").should("have.text", "Наш каталог");
    mainPage.openCatalog();
    cy.url().should("contain", "catalog");
    mainPage.goBack();
    cy.url().should("include", "royalstone");
  });

  it("Check the Call to Action button", () => {
    cy.get(".hero-section__desc .btn-accent").should(
      "have.text",
      "Замовити дзвінок"
    );
    mainPage.openForm();
    cy.get("#wpforms-submit-135").should("be.visible");
    mainPage.closeForm();
    cy.get(".hero-bg-wrapper").should("be.visible");
  });
});

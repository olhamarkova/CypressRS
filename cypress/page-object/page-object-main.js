/// <reference types="cypress" />

import { siteURLs } from "../fixtures/page-data.js";

export class MainPage {
  navigate() {
    cy.visit(siteURLs.url);
  }

  linkValidation(text) {
    cy.url().should("include", text);
  }

  openBlog() {
    cy.get("a.section-link").click({ force: true });
  }

  openArticle(index) {
    cy.get(".blog-item__title").eq(index).click();
  }

  openCatalog() {
    cy.get(".btn-border").click({ force: true });
  }

  openForm() {
    cy.get(".hero-section__desc .btn-accent").click({ force: true });
  }

  goBack() {
    cy.go("back");
  }

  reload() {
    cy.get(".header__logo-img").click();
  }

  //page body validation

  blogHeaderValidation(text) {
    cy.get("#blog-3-posts h2.section-title").should("have.text", text);
  }

  checkArticlesCount(index) {
    cy.get(".blog-item__top").should("have.length", index);
  }

  checkBlogLink() {
    cy.get("a.section-link").should("be.visible").and("have.attr", "href");
  }

  breadcrumpsValidation(text) {
    cy.get("a span[itemprop='name']").eq(1).should("have.text", text);
  }

  catalogButtonValidation(text) {
    cy.get(".btn-border").should("have.text", text);
  }

  callToActionValidation(text) {
    cy.get(".hero-section__desc .btn-accent").should("have.text", text);
  }

  heroSectionValidation() {
    cy.get(".hero-bg-wrapper").should("be.visible");
  }

  //mobile validation

  mobCheckArticlesCount() {
    cy.get(".blog-item__top").each(($el, index, $list) => {
      if (index !== 2) {
        cy.wrap($el).should("be.visible");
      }
    });
  }
}

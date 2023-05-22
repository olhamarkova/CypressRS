/// <reference types="cypress" />

import { Blog } from "../../page-object/Blog.js";

const blogPage = new Blog();

describe("Check the Blog Page", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(Cypress.env("url") + this.data.blog);
    });
  });

  it("Check the Actual Articles Section", function () {
    blogPage.elements
      .actualNowBigPreview()
      .should("be.visible")
      .and("have.length", 1);
    blogPage.elements
      .actualNowSmallPreview()
      .should("be.visible")
      .and("have.length", 2);
  });

  it("Check the Load More Button", function () {
    blogPage.elements.newArticleTitle().should("have.length", 6);
    blogPage.loadMoreArticles();
    blogPage.elements.newArticleTitle().should("have.length", 12);
  });

  it("Check the Article Page", function () {
    blogPage.openArticle(1);
    cy.wait(3000);
    blogPage.elements.articleContent().should("be.visible");
    blogPage.elements.shareLinks().should("have.length", 7);
    blogPage.elements.postNavigationPanel().should("be.visible");
    blogPage.elements.previousPostLink().should("have.attr", "href");
    blogPage.elements.nextPostLink().should("have.attr", "href");
    blogPage.elements
      .popularArticlesSection()
      .should("be.visible")
      .and("have.length", 3);
  });
});

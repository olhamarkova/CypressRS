/// <reference types="cypress" />

import { Blog } from "../../page-object/page-object-blog.js";

const blogPage = new Blog();

describe("Check the Call to Action section", () => {
  beforeEach(() => {
    blogPage.navigate();
  });

  it("Check the Actual Articles Section", () => {
    cy.get(".blog-top-item--big").should("be.visible").and("have.length", 1);
    cy.get(".blog-top-item--small").should("be.visible").and("have.length", 2);
  });

  it("Check the Count of Articles on the Main Blog Page", () => {
    cy.get(".blog-list-item-col").should("have.length", 6);
    blogPage.openMore();
    cy.get(".blog-list-item-col").should("have.length", 12);
  });

  it("Check the Article Page", () => {
    blogPage.openArticle();
    cy.get(".content").should("be.visible");
    blogPage.wait();
    cy.get(".share-item__link").should("have.length", 7);
    cy.get(".post-nav").should("be.visible");
    cy.get(".post-nav__prev a").should("have.attr", "href");
    cy.get(".post-nav__next a").should("have.attr", "href");
    cy.get(".blog-item-col").should("be.visible").and("have.length", 3);
  });
});

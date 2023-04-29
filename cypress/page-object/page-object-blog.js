/// <reference types="cypress" />

import { siteURLs } from "../fixtures/page-data.js";

export class Blog {
  navigate() {
    cy.visit(siteURLs.blog);
  }

  wait() {
    cy.wait(3000);
  }

  openArticle(index) {
    cy.get(".blog-list-item-col").eq(index).click();
  }

  openMore() {
    cy.get(".loadmore-btn").click();
  }

  goBack() {
    cy.go("back");
  }

  //validation

  checkBigBlogItem(count) {
    cy.get(".blog-top-item--big")
      .should("be.visible")
      .and("have.length", count);
  }

  checkSmallBlogItem(count) {
    cy.get(".blog-top-item--small")
      .should("be.visible")
      .and("have.length", count);
  }

  checkArticlesCount(count) {
    cy.get(".blog-list-item-col").should("have.length", count);
  }

  checkArticleContent() {
    cy.get(".content").should("be.visible");
  }

  checkShareLinks(count) {
    cy.get(".share-item__link").should("have.length", count);
  }

  checkPostNavPanel() {
    cy.get(".post-nav").should("be.visible");
  }

  checkNavPanelLinks(char) {
    cy.get(`.post-nav__${char} a`).should("have.attr", "href");
  }

  checkPopularSection(index) {
    cy.get(".blog-item__top").should("be.visible").and("have.length", index);
  }
}

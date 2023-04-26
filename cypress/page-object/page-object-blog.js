/// <reference types="cypress" />

import { contacts } from "../fixtures/page-data.js";

export class Blog {
  navigate() {
    cy.visit(contacts.blog);
  }

  scroll() {
    cy.get(".cta-section__content").scrollIntoView();
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

  partnerButton() {
    cy.get(".btn-border").click();
  }

  goBack() {
    cy.go("back");
  }

  closeModalWindow() {
    cy.get(".is-close-btn").click();
  }

  openForm() {
    cy.get(".cta-section__content .btn-accent").click();
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
    cy.get(".blog-item-col").should("be.visible").and("have.length", index);
  }

  //call to action section validation

  checkCTASectionContent() {
    cy.get(".cta-section__content").should("be.visible");
  }

  checkCTAHeader(text) {
    cy.get(".cta-section__content h3").should("have.text", text);
  }

  checkCTAButton() {
    cy.get(".cta-section__content .btn-accent").should("be.visible");
  }
}

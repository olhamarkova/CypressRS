/// <reference types="cypress" />

import { contacts } from "../fixtures/page-data.js";

export class MainPage {
  navigate() {
    cy.visit(contacts.url);
  }
  viewPort() {
    cy.viewport(1280, 750);
  }

  scrollToFooter() {
    cy.get(".footer-top").scrollIntoView();
  }

  openMessengers() {
    cy.get(".messengers-btn-wrapper").click();
  }

  nextReview() {
    cy.get(".slider-button--next").click({ force: true });
  }

  openBlog() {
    cy.get("a.section-link").click({ force: true });
  }

  openArticle() {
    cy.get(".blog-item__title").eq(1).click();
  }

  openCatalog() {
    cy.get(".btn-border").click({ force: true });
  }

  openForm() {
    cy.get(".hero-section__desc .btn-accent").click({ force: true });
  }

  closeForm() {
    cy.get(".is-close-btn").click();
  }

  goBack() {
    cy.go("back");
  }

  reload() {
    cy.get(".header__logo-img").click();
  }
}

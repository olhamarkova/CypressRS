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

  openArticle() {
    cy.get(".blog-list-item-col").eq(1).click();
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
}

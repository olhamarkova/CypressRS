/// <reference types="cypress" />

import { siteURLs } from "../fixtures/page-data.js";

export class Delivery {
  navigate() {
    cy.visit(siteURLs.delivery);
  }

  checkDeliveryHeader(text) {
    cy.get(".delivery h2.delivery__title").should("have.text", text);
  }

  checkDeliveryCount(count) {
    cy.get(".delivery .col-lg-6").should("have.length", count);
  }

  checkPaymentHeader(text) {
    cy.get(".payment h2.section-title").should("have.text", text);
  }

  checkPaymentsCount(count) {
    cy.get(".payment .col-lg-6").should("have.length", count);
  }

  checkLinks(text) {
    cy.get(".block-item p a").each(($el, index, $list) => {
      cy.wrap($el).should("have.text", text).and("have.attr", "href");
    });
  }
}

/// <reference types="cypress" />

import { contacts } from "../fixtures/contacts-data.js";
import { siteURLs } from "../fixtures/page-data.js";

export class Footer {
  navigate() {
    cy.visit(siteURLs.url);
  }

  scrollToFooter() {
    cy.get(".footer-top").scrollIntoView();
  }

  checkLogo() {
    cy.get(".footer__logo-img").should("be.visible");
  }

  checkSocialsCount(count) {
    cy.get(".footer-top__col-logo")
      .find("a.socials-link")
      .should("have.length", count);
  }

  footerMenuValidation(index, text) {
    cy.get(`#nav_menu-${index} h4`).should("include.text", text);
  }

  footerContactsHeaderValidation(text) {
    cy.get(".footer-top__col-contacts h4").should("have.text", text);
  }

  footerMenuCount(index, count) {
    cy.get(`#menu-menyu-v-pidvali-${index}`)
      .find(".menu-item")
      .should("have.length", count);
  }

  footerMenuLinksVal() {
    cy.get(".menu-menyu-v-pidvali-1-container")
      .find(".menu-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });
  }

  contactsLinksCheck() {
    cy.get(".footer-top__col-contacts :nth-child(3)")
      .find(".phones-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });
  }

  checkEmail() {
    cy.get(".footer-top__col-contacts")
      .find(".emails-item__link")
      .should("have.text", contacts.email)
      .and("have.attr", "href");
  }

  checkAddress(text) {
    cy.get(".footer-top__col-contacts .address__link")
      .should("include.text", text)
      .and("have.attr", "href");
  }

  checkPrivacyPolicy(text) {
    cy.get("a.privacy-policy-link")
      .should("have.text", text)
      .and("have.attr", "href");
  }
}

/// <reference types="cypress" />

import { contacts } from "../fixtures/contacts-data.js";

export class Footer {
  elements = {
    footerSection: () => cy.get("#footer"),
    logoInFooter: () => cy.get(".footer__logo-img"),
    socialLinks: () => cy.get(".footer-top__col-logo a.socials-link"),
    navigationMenu: () => cy.get("#nav_menu-2"),
    navMenuTitle: () => cy.get("#nav_menu-2 .footer-col-title"),
    navMenuItems: () => cy.get("#menu-menyu-v-pidvali-1 .menu-item"),
    catalogMenu: () => cy.get("#nav_menu-3"),
    catalogMenuTitle: () => cy.get("#nav_menu-3 .footer-col-title"),
    catalogMenuItem: () => cy.get("#menu-menyu-v-pidvali-2 .menu-item"),
    contactsMenu: () => cy.get(".footer-top__col-contacts"),
    contactsMenuTitle: () =>
      cy.get(".footer-top__col-contacts .footer-col-title"),
    emailInFooter: () => cy.get(".footer-top__col-contacts .emails-item__link"),
    adressInFooter: () => cy.get(".footer-top__col-contacts .address__link"),
    privacyPolicyLink: () => cy.get("a.privacy-policy-link"),
  };

  validateFooterMenuLinks() {
    this.elements.navMenuItems().each(($el, index, $list) => {
      cy.wrap($el).find("a").should("have.attr", "href");
    });
    this.elements.catalogMenuItem().each(($el, index, $list) => {
      cy.wrap($el).find("a").should("have.attr", "href");
    });
  }

  validateContactsLinks() {
    this.elements
      .contactsMenu()
      .find(".phones-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });
  }

  validateEmailInFooter() {
    this.elements
      .emailInFooter()
      .should("have.text", contacts.email)
      .and("have.attr", "href");
  }

  validateAddressInFooter() {
    this.elements
      .adressInFooter()
      .should("include.text", contacts.city)
      .and("have.attr", "href");
  }

  validatePrivacyPolicyLink(text) {
    this.elements
      .privacyPolicyLink()
      .should("have.text", text)
      .and("have.attr", "href");
  }
}

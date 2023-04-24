/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";
import { contacts } from "../../fixtures/page-data.js";

const mainPage = new MainPage();

describe("Check the main page", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.viewPort();
  });

  it("Check the Logo", () => {
    mainPage.scrollToFooter();
    cy.get(".footer__logo-img").should("be.visible");
  });

  it("Check the Social Links", () => {
    mainPage.scrollToFooter();
    cy.get(".footer-top__col-logo")
      .find("a.socials-link")
      .should("have.length", 4);
  });

  it("Check the Menu", () => {
    mainPage.scrollToFooter();
    cy.get(".footer-top__col-logo")
      .find("a.socials-link")
      .should("have.length", 4);

    cy.get("h4.footer-col-title").should(
      "include.text",
      "Навігація",
      "Каталог",
      "Контакти"
    );

    cy.get("#menu-menyu-v-pidvali-1")
      .find(".menu-item")
      .should("have.length", 7);

    cy.get("#menu-menyu-v-pidvali-1")
      .find(".menu-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });

    cy.get(".menu-menyu-v-pidvali-1-container")
      .find(".menu-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });
  });

  it("Check the Contacts Section", () => {
    cy.get(".footer-top__col-contacts :nth-child(3)")
      .find(".phones-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });

    cy.get(".footer-top__col-contacts")
      .find(".emails-item__link")
      .should("have.text", contacts.email)
      .and("have.attr", "href");

    cy.get(".footer-top__col-contacts .address__link")
      .should("include.text", "Коростишів")
      .and("have.attr", "href");
  });

  it("Check the Privacy Policy link", () => {
    cy.get("a.privacy-policy-link")
      .should("have.text", "Політика конфіденційності")
      .and("have.attr", "href");
  });
});

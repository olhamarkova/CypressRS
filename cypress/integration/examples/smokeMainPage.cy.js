/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-objectRS.js";
import { contacts } from "../../fixtures/page-data.js";

const mainPage = new MainPage();

describe("Check the main page", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.viewPort();
  });

  it("Check the header", () => {
    cy.get(".header__logo-img").click();
    cy.get(".header-top__right-contacts")
      .find(".contacts-item:nth-child(1)")
      .find(".phones-item__link")
      .should("include.text", contacts.managerPhoneNum)
      .and("have.attr", "href");
    cy.get(".header-top__right-contacts")
      .find(".contacts-item:nth-child(2)")
      .find(".phones-item__link")
      .should("include.text", contacts.mainPhoneNum)
      .and("have.attr", "href");
    cy.get(".d-md-block > .emails > .emails-item > .emails-item__link").should(
      "have.text",
      contacts.email
    );
    cy.get(".header-top__left > .schedule > p > strong").should(
      "have.text",
      "Графік роботи:"
    );
  });

  it("Check the footer", () => {
    mainPage.scrollToFooter();
    cy.get(".footer__logo-img");
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
    cy.get(".footer-top__col-contacts > :nth-child(3)")
      .find(".phones-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });
    cy.get(".footer-top__col-contacts")
      .find(".emails-item")
      .find(".emails-item__link")
      .should("have.text", contacts.email)
      .and("have.attr", "href");
  });

  it("Check the messanger's menu", () => {
    cy.get(".messengers-btn-wrapper").click();
    cy.get(".messengers-popup")
      .find(".messengers-popup__item")
      .should("have.length", 6);
  });
});

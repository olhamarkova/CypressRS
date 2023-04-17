/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-objectRS.js";
import { contacts } from "../../fixtures/page-data.js";

const mainPage = new MainPage();

describe("Check the main page", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.viewPort();
  });

  it("Header shoul contain phone numbers, email and schedule", () => {
    cy.get(".header__logo-img > .attachment-full").click();
    cy.get(":nth-child(1) > .phones > :nth-child(1) > .phones-item__link")
      .should("have.text", contacts.managerPhoneNum)
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

  it("Footer should contain links", () => {
    cy.get(".footer-top").scrollIntoView();
    cy.get(".footer__logo-img > .attachment-full");
    cy.get(".footer-top").scrollIntoView();
    cy.get(".footer-top__col-logo > .socials")
      .find("a.socials-link")
      .should("have.length", 4);
    cy.get("#nav_menu-2 > .footer-col-title").should("have.text", "Навігація");
    cy.get("#menu-menyu-v-pidvali-1")
      .find(".menu-item")
      .should("have.length", 7);
    cy.get("#menu-menyu-v-pidvali-1")
      .find(".menu-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });
    cy.get(".footer-top__col-contacts > .footer-col-title").should(
      "have.text",
      "Контакти"
    );
    cy.get(".footer-top__col-contacts > :nth-child(3)")
      .find(".phones-item")
      .each(($el, index, $list) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });
    cy.get(
      ".footer-top__col-contacts > :nth-child(3) > .phones > :nth-child(2) > .phones-item__link"
    ).should("have.text", contacts.mainPhoneNum);
    cy.get(
      ".footer-top__col-contacts > :nth-child(4) > .emails > .emails-item > .emails-item__link"
    ).should("have.attr", "href");
  });

  it("Should open messangers menu", () => {
    cy.get(".messengers-btn-wrapper").click();
    cy.get(".messengers-popup")
      .find(".messengers-popup__item")
      .should("have.length", 6);
  });
});

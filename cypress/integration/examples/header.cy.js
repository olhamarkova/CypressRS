/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";
import { contacts } from "../../fixtures/page-data.js";

const mainPage = new MainPage();

describe("Check the Header", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.viewPort();
  });

  it("Check the logo", () => {
    cy.get(".header__logo-img").should("be.visible");
    mainPage.reload();
    cy.url().should("include", "royalstone");
  });

  it("Check the Contacts Section", () => {
    cy.get(".phones:nth-child(1)").each(($el, index, $list) => {
      cy.wrap($el).find("a").should("have.attr", "href");
    });

    cy.get(".header-top__right-contacts")
      .find(".phones-item__link")
      .should("include.text", contacts.mainPhoneNum, contacts.managerPhoneNum);

    cy.get(".header-top__right-contacts")
      .find(".emails-item__link")
      .should("include.text", contacts.email);

    cy.get(".schedule").should("include.text", "Графік роботи:");
  });
});

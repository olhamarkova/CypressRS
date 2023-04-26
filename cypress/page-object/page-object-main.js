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

  //page body validation

  mesButtonValidation() {
    cy.get(".messengers-btn-wrapper").should("be.visible");
  }

  checkMessengersCount(count) {
    cy.get(".messengers-popup")
      .find(".messengers-popup__item")
      .should("have.length", count);
  }

  reviewTextValidation(index, text) {
    cy.get("#reviews-slider")
      .find(".reviews-item__inner")
      .eq(index)
      .should("include.text", text);
  }

  blogHeaderValidation(text) {
    cy.get(".blog-home-section h2.section-title").should("have.text", text);
  }

  checkArticlesCount(index) {
    cy.get(".blog-item__top").should("have.length", index);
  }

  checkBlogLink() {
    cy.get("a.section-link").should("have.attr", "href");
  }

  linkValidation(text) {
    cy.url().should("include", text);
  }

  breadcrumpsValidation(text) {
    cy.get("a span[itemprop='name']").eq(1).should("have.text", text);
  }

  catalogButtonValidation(text) {
    cy.get(".btn-border").should("have.text", text);
  }

  callToActionValidation(text) {
    cy.get(".hero-section__desc .btn-accent").should("have.text", text);
  }

  formButtonValidation() {
    cy.get("#wpforms-submit-135").should("be.visible");
  }

  heroSectionValidation() {
    cy.get(".hero-bg-wrapper").should("be.visible");
  }

  //header validation

  checkMainLogo() {
    cy.get(".header__logo-img").should("be.visible");
  }

  contactSectionValidation() {
    cy.get(".phones:nth-child(1)").each(($el, index, $list) => {
      cy.wrap($el).find("a").should("have.attr", "href");
    });
  }

  phoneNumValidation() {
    cy.get(".header-top__right-contacts")
      .find(".phones-item__link")
      .should("include.text", contacts.mainPhoneNum, contacts.managerPhoneNum);
  }

  emailValidation() {
    cy.get(".header-top__right-contacts")
      .find(".emails-item__link")
      .should("include.text", contacts.email);
  }

  scheduleValidation(text) {
    cy.get(".schedule").should("include.text", text);
  }

  //footer validation

  checkLogo() {
    cy.get(".footer__logo-img").should("be.visible");
  }

  checkSocialsCount(count) {
    cy.get(".footer-top__col-logo")
      .find("a.socials-link")
      .should("have.length", count);
  }

  footerMenuValidation(text) {
    cy.get("h4.footer-col-title").should("include.text", text);
  }

  footerMenuCount(count) {
    cy.get("#menu-menyu-v-pidvali-1")
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

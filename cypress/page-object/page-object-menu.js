/// <reference types="cypress" />

export class Menu {
  elements = {
    mainMenu: () => cy.get("#menu-menyu-v-shapczi"),
    mainMenuItem: () => cy.get(".header__nav .menu-item a"),
    chooseLanguageUkr: () => cy.get("#menu-item-wpml-ls-2-uk a[title='UA']"),
    chooseLanguageRu: () => cy.get("#menu-item-wpml-ls-2-ru a[title='RU']"),
    catalogMenuItem: () => cy.get("#menu-item-89"),
    tombstonesMenuItem: () => cy.get("#menu-item-2888"),
    forOneSubMenuItem: () => cy.get("#menu-item-2891"),
    forTwoSubMenuItem: () => cy.get("#menu-item-2890"),
    elitSubMenuItem: () => cy.get("#menu-item-2892"),
    militarySubMenuItem: () => cy.get("#menu-item-2889"),
    budMenuItem: () => cy.get("#menu-item-761"),
    tilesMenuItem: () => cy.get("#menu-item-2887"),
    bordMenuItem: () => cy.get("#menu-item-768"),
    stonesMenuItem: () => cy.get("#menu-item-2639"),
    laderMenuItem: () => cy.get("#menu-item-2642"),
    tablesMenuItem: () => cy.get("#menu-item-2641"),
    windowsMenuItem: () => cy.get("#menu-item-2640"),
    balyasiniMenuItem: () => cy.get("#menu-item-2638"),
    decorMenuItem: () => cy.get("#menu-item-762"),
    ballsMenuItem: () => cy.get("#menu-item-2791"),
    vaseMenuItem: () => cy.get("#menu-item-2811"),
    lampMenuItem: () => cy.get("#menu-item-2810"),
    firePlaceMenuItem: () => cy.get("#menu-item-2809"),
    statueMenuItem: () => cy.get("#menu-item-2808"),
    pricesMenuItem: () => cy.get("#menu-item-92"),
    deliveryMenuItem: () => cy.get("#menu-item-88"),
    portfolioMenuItem: () => cy.get("#menu-item-91"),
    aboutUsMenuItem: () => cy.get("#menu-item-93"),
    blogMenuItem: () => cy.get("#menu-item-87"),
    partnersMenuItem: () => cy.get("#menu-item-94"),
    answersMenuItem: () => cy.get("#menu-item-86"),
    contactsPortfolioItem: () => cy.get("#menu-item-90"),
  };

  validateMainMenu() {
    this.elements.mainMenuItem().each(($el, index, $list) => {
      cy.wrap($el).should("have.attr", "href");
    });
  }
}

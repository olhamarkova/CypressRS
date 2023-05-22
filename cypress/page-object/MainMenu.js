/// <reference types="cypress" />

export class Menu {
  elements = {
    mainMenu: () => cy.get("#menu-menyu-v-shapczi"),
    mainMenuItem: () => cy.get(".header__nav .menu-item a"),
    chooseLanguageUkr: () => cy.get("#menu-item-wpml-ls-2-uk a[title='UA']"),
    chooseLanguageRu: () => cy.get("#menu-item-wpml-ls-2-ru a[title='RU']"),
    catalogMenuItem: () => cy.get("#menu-item-89 a"),
    tombstonesMenuItem: () => cy.get("#menu-item-2888 a"),
    forOneSubMenuItem: () => cy.get("#menu-item-2891 a"),
    forTwoSubMenuItem: () => cy.get("#menu-item-2890 a"),
    elitSubMenuItem: () => cy.get("#menu-item-2892 a"),
    militarySubMenuItem: () => cy.get("#menu-item-2889 a"),
    budMenuItem: () => cy.get("#menu-item-761 a"),
    tilesMenuItem: () => cy.get("#menu-item-2887 a"),
    bordMenuItem: () => cy.get("#menu-item-768 a"),
    stonesMenuItem: () => cy.get("#menu-item-2639 a"),
    laderMenuItem: () => cy.get("#menu-item-2642 a"),
    tablesMenuItem: () => cy.get("#menu-item-2641 a"),
    windowsMenuItem: () => cy.get("#menu-item-2640 a"),
    balyasiniMenuItem: () => cy.get("#menu-item-2638 a"),
    decorMenuItem: () => cy.get("#menu-item-762 a"),
    ballsMenuItem: () => cy.get("#menu-item-2791 a"),
    vaseMenuItem: () => cy.get("#menu-item-2811 a"),
    lampMenuItem: () => cy.get("#menu-item-2810 a"),
    firePlaceMenuItem: () => cy.get("#menu-item-2809 a"),
    statueMenuItem: () => cy.get("#menu-item-2808 a"),
    pricesMenuItem: () => cy.get("#menu-item-92 a"),
    deliveryMenuItem: () => cy.get("#menu-item-88 a"),
    portfolioMenuItem: () => cy.get("#menu-item-91 a"),
    aboutUsMenuItem: () => cy.get("#menu-item-93 a"),
    blogMenuItem: () => cy.get("#menu-item-87 a"),
    partnersMenuItem: () => cy.get("#menu-item-94 a"),
    answersMenuItem: () => cy.get("#menu-item-86 a"),
    contactsPortfolioItem: () => cy.get("#menu-item-90 a"),
  };

  validateMainMenu() {
    this.elements.mainMenuItem().each(($el, index, $list) => {
      cy.wrap($el).should("have.attr", "href");
    });
  }
}

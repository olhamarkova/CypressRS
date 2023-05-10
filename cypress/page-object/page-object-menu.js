/// <reference types="cypress" />

export class Menu {
  elements = {
    chooseLanguageUkr: () => cy.get("#menu-item-wpml-ls-2-uk a[title='UA']"),
    chooseLanguageRu: () => cy.get("#menu-item-wpml-ls-2-ru a[title='RU']"),
    catalogMenuItem: () => cy.get("#menu-item-89"),
  };
}

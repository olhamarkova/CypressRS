/// <reference types="cypress" />

export class Catalog {
  elements = {
    productCard: () => cy.get(".catalog-item__top"),
    productTitle: () => cy.get(".catalog-item__title a"),
    infoBlockLinks: () => cy.get(".info-block__link"),
    modalInfoContact: () => cy.get(".modal-info-contact"),
    closeModalInfoContactButton: () => cy.get(".is-close-btn"),
    ctaButton: () => cy.get(".catalog-single__btn"),
  };

  openModalInfoContacts() {
    this.elements.infoBlockLinks().eq(1).click({ force: true });
  }

  closeModalInfoContacts() {
    this.elements.closeModalInfoContactButton().click({ force: true });
  }
}

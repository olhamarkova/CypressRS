/// <reference types="cypress" />

export class Partnership {
  elements = {
    productsGallerySection: () => cy.get("#77"),
    benefitsSection: () => cy.get("#benefits"),
    tilesGallerySection: () => cy.get("#530"),
  };
}

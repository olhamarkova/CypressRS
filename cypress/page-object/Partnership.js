/// <reference types="cypress" />

export class Partnership {
  elements = {
    productsGallerySection: () => cy.get("#77"),
    benefitsSection: () => cy.get("#benefits"),
    tilesGallerySection: () => cy.get("#530"),
  };

  validatePageBlocks() {
    this.elements.productsGallerySection().should("be.visible");
    this.elements.benefitsSection().should("be.visible");
    this.elements.tilesGallerySection().should("be.visible");
  }
}

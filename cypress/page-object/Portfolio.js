/// <reference types="cypress" />

export class PortfolioPage {
  elements = {
    galleryImage: () => cy.get(".img-popup"),
    nextPhotoButton: () => cy.get("button.is-next"),
    previousPhotoButton: () => cy.get("button.is-prev"),
    closeGalleryButton: () => cy.get("button[title='Close']"),
  };

  openGallery(index) {
    this.elements.galleryImage().eq(index).click({ force: true });
  }

  swipePhotos() {
    for (let n = 0; n < 5; n++) {
      this.elements.nextPhotoButton().click({ force: true });
    }
  }

  closeGallery() {
    this.elements.closeGalleryButton().click({ force: true });
  }
}

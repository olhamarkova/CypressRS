/// <reference types="cypress" />

export class Blog {
  elements = {
    newArticleTitle: () => cy.get(".blog-item__title"),
    loadMoreButton: () => cy.get(".loadmore-btn"),
    actualNowBigPreview: () => cy.get(".blog-top-item--big"),
    actualNowSmallPreview: () => cy.get(".blog-top-item--small"),
    articleContent: () => cy.get(".content"),
    shareLinks: () => cy.get(".share-item__link"),
    postNavigationPanel: () => cy.get(".post-nav"),
    previousPostLink: () => cy.get(".post-nav__prev a"),
    nextPostLink: () => cy.get(".post-nav__next a"),
    popularArticlesSection: () => cy.get(".blog-item__top"),
  };

  loadMoreArticles() {
    this.elements.loadMoreButton().click();
  }

  openArticle(index) {
    this.elements.newArticleTitle().eq(index).click();
  }
}

/// <reference types="cypress" />

export class MainPage {
  elements = {
    goToBlogButton: () => cy.get("a.section-link"),
    blogArticleItem: () => cy.get(".blog-item__title"),
    blogSectionHeader: () => cy.get("#blog-3-posts h2.section-title"),
    heroSection: () => cy.get(".hero-bg-wrapper"),
    catalogButtonInHeroSection: () => cy.get(".hero-section__desc .btn-border"),
    ctaButtonInHeroSection: () => cy.get(".hero-section__desc .btn-accent"),
    workStepsSection: () => cy.get(".work-steps-section"),
    workStepsItem: () => cy.get(".work-steps-item__icon"),
    catalogCardItem: () => cy.get(".catalog-cat-nav-item__img"),
    catalogItemTitle: () => cy.get(".img-box__title"),
    productSliderSection: () => cy.get(".prod-slider-section"),
    productCardItem: () => cy.get(".catalog-item"),
    productCardItem: () => cy.get(".catalog-item__title"),
    productCardButton: () => cy.get(".catalog-item__btn"),
  };

  openBlog() {
    this.elements.goToBlogButton().eq(1).click({ force: true });
  }

  openArticle(index) {
    this.elements.blogArticleItem().eq(index).click();
  }

  openCatalogInHeroSection() {
    this.elements.catalogButtonInHeroSection().click({ force: true });
  }

  openFormInHeroSection() {
    this.elements.ctaButtonInHeroSection().click({ force: true });
  }

  validateArticlesCountOnMobile() {
    this.elements.blogArticleItem().each(($el, index, $list) => {
      if (index !== 2) {
        cy.wrap($el).should("be.visible");
      }
    });
  }
}

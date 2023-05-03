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
  };

  openBlog() {
    this.elements.goToBlogButton().click({ force: true });
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

/// <reference types="cypress" />

export class FAQPage {
  elements = {
    mainHeader: () => cy.get(".hero-parallax-section__title"),
    closeSectionButton: () => cy.get(".spoller-item__button-icon"),
    questionSection: () => cy.get(".spoller-item__content"),
    answerText: () => cy.get("div[itemprop='text']"),
    answerSectionContent: () => cy.get(".spoller-item__content p"),
  };

  closeSection(index) {
    this.elements.closeSectionButton().eq(index).click();
  }

  validateHiddenSections() {
    this.elements.answerText().each(($el, index, $list) => {
      if (index !== 0) {
        cy.wrap($el).should("not.be.visible");
      }
    });
  }

  openFirstAnswer(index, shouldBeOpen) {
    const item = this.elements.answerSectionContent().eq(index);
    item.should(`${shouldBeOpen ? "" : "not."}be.visible`);
  }
}

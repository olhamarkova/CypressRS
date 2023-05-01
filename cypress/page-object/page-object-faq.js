/// <reference types="cypress" />

export class FAQPage {
  closeSection(index) {
    cy.get(".spoller-item__button-icon").eq(index).click();
  }

  headerValidation(text) {
    cy.get(".hero-parallax-section__title").should("have.text", text);
  }

  checkQuestionsCount(count) {
    cy.get(".spoller-item__content").should("have.length", count);
  }

  hiddenSectionsValidation() {
    cy.get("div[itemprop='text']").each(($el, index, $list) => {
      if (index !== 0) {
        cy.wrap($el).should("not.be.visible");
      }
    });
  }

  firstSectionValidation(index, shouldBeOpen) {
    const item = cy.get(".spoller-item__content p").eq(index);
    item.should(`${shouldBeOpen ? "" : "not."}be.visible`);
  }
}

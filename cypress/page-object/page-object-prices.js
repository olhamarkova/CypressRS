/// <reference types="cypress" />

export class Prices {
  tableCheck() {
    cy.get(".price-table").should("be.visible");
  }

  tableRowsCheck(count) {
    cy.get(".price-table-item").should("have.length", count);
  }

  downloadsSectionCheck() {
    cy.get(".prices-docs").should("be.visible");
  }

  countOfSectionsValidation(count) {
    cy.get(".prices-docs-item").should("have.length", count);
  }

  countOfFilesCheck(item, count) {
    cy.get(`.doc-item__${item}`).should("have.length", count);
  }

  checkLinks(item) {
    cy.get(`.doc-item__${item}`).each(($el, index, $list) => {
      cy.wrap($el).should("have.attr", "href");
    });
  }
}

/// <reference types="cypress" />

export class Filter {
  elements = {
    filter: () => cy.get("#filter"),
    tombstonesCheckbox: () => cy.get("#wpc-checkbox-taxonomy-prod-cat-5"),
    forOneCheckbox: () => cy.get("#wpc-checkbox-taxonomy-prod-cat-6"),
    maxPriceInput: () => cy.get("input[name='max_price']"),
    redColorCheckbox: () => cy.get("#wpc-checkbox-post_meta-colour-12"),
    filterChips: () => cy.get(".wpc-filter-chip-name"),
  };

  filterRedTombstonesForOne() {
    this.elements.maxPriceInput().clear({ force: true });
    this.elements.maxPriceInput().type("60000{enter}");
    cy.wait(1000);
    this.elements.tombstonesCheckbox().check({ force: true });
    cy.wait(1000);
    this.elements.forOneCheckbox().check({ force: true });
    cy.wait(1000);
    this.elements.redColorCheckbox().check({ force: true });
    cy.wait(1000);
  }
}

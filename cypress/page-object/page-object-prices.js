/// <reference types="cypress" />

export class Prices {
  elements = {
    pricesTable: () => cy.get(".price-table"),
    priceTableRow: () => cy.get(".price-table-item"),
    downloadsSection: () => cy.get(".prices-docs"),
    pricesDocuments: () => cy.get(".prices-docs-item"),
    downloadDocumentIcon: () => cy.get(".doc-item__icon"),
    downloadDocumenTitle: () => cy.get(".doc-item__title"),
  };
}

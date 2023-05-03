/// <reference types="cypress" />

import { Delivery } from "../../page-object/page-object-delivery.js";
import { text } from "../../fixtures/texts.js";

const delivPage = new Delivery();

describe("Check the Delivery page", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.delivery);
    });
  });

  it("Check the Delivery Section", function () {
    delivPage.elements
      .deliverySectionHeader()
      .should("have.text", text.deliveryTitle);
    delivPage.elements.deliveryServices().should("have.length", 4);
  });

  it("Check the Payment Section", function () {
    delivPage.elements
      .paymentSectionHeader()
      .should("have.text", text.paymentTitle);
    delivPage.elements.paymentMethods().should("have.length", 3);
  });

  it("Check the links", function () {
    delivPage.checkDeliveryInfoLinks(text.deliveryLinkAnchor);
  });
});

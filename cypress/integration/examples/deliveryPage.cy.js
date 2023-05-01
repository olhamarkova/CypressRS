/// <reference types="cypress" />

import { Delivery } from "../../page-object/page-object-delivery.js";

const delivPage = new Delivery();

describe("Check the Delivery page", () => {
  beforeEach(function () {
    cy.fixture("page-data").then(function (data) {
      this.data = data;
      cy.openPage(this.data.delivery);
    });
  });

  it("Check the Delivery Section", function () {
    delivPage.checkDeliveryHeader("Способи доставки:");
    delivPage.checkDeliveryCount(4);
  });

  it("Check the Payment Section", function () {
    delivPage.checkPaymentHeader("Способи оплати:");
    delivPage.checkPaymentsCount(3);
  });

  it("Check the links", function () {
    delivPage.checkLinks("тарифами");
  });
});

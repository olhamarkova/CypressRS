/// <reference types="cypress" />

import { Delivery } from "../../page-object/page-object-delivery.js";

const delivPage = new Delivery();

describe("Check the Delivery page", () => {
  beforeEach(() => {
    delivPage.navigate();
  });

  it("Check the Delivery Section", () => {
    delivPage.checkDeliveryHeader("Способи доставки:");
    delivPage.checkDeliveryCount(4);
  });

  it("Check the Payment Section", () => {
    delivPage.checkPaymentHeader("Способи оплати:");
    delivPage.checkPaymentsCount(3);
  });

  it("Check the links", () => {
    delivPage.checkLinks("тарифами");
  });
});

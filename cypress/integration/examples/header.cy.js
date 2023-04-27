/// <reference types="cypress" />

import { Header } from "../../page-object/page-object-header.js";
import { Dimensions } from "../../page-object/dimensions.js";

const header = new Header();
const viewport = new Dimensions();

describe("Check the Header on Desktop", () => {
  beforeEach(() => {
    header.navigate();
    viewport.desktopView();
  });

  it("Check the logo", () => {
    header.checkMainLogo();
    header.reload();
    header.linkValidation("royalstone");
  });

  it("Check the Contacts Section", () => {
    header.contactSectionValidation();
    header.phoneNumValidation();
    header.emailValidation();
    header.scheduleValidation("Графік роботи:");
  });
});

describe("Check the Header on Mobile Screen", () => {
  beforeEach(() => {
    header.navigate();
    viewport.mobileView();
  });

  it("Check the Logo", () => {
    header.checkMainLogo();
  });

  it("Check the Contacts Section", () => {
    header.contactSectionValidation();
    header.phoneNumValidation();
  });

  it("Check the Mobile Menu", () => {
    header.mobNavigation();
  });
});

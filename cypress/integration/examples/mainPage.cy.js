/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";
import { Dimensions } from "../../page-object/dimensions.js";

const mainPage = new MainPage();
const viewport = new Dimensions();

describe("Check the Main Page on Desktop", () => {
  beforeEach(() => {
    mainPage.navigate();
    viewport.desktopView();
  });

  it("Check the messenger's menu", () => {
    mainPage.mesButtonValidation();
    mainPage.openMessengers();
    mainPage.checkMessengersCount(6);
  });

  it("Check the Our Adventages Section", () => {
    mainPage.ourAdvantagesCheck();
    mainPage.ourAdvantagesItems(4);
  });

  it("Check the review block", () => {
    mainPage.nextReview();
    mainPage.reviewTextValidation(2, "Олександра");
  });

  it("Check the Blog Section", () => {
    mainPage.blogHeaderValidation("Наш блог");
    mainPage.checkArticlesCount(3);
  });

  it("Check the links in the Blog Section", () => {
    mainPage.checkBlogLink();
    mainPage.openBlog();
    mainPage.linkValidation("blog");
    mainPage.goBack();
    mainPage.linkValidation("royalstone");
    mainPage.openArticle(1);
    mainPage.breadcrumpsValidation("Наш блог");
  });

  it("Check the Catalog button", () => {
    mainPage.catalogButtonValidation("Наш каталог");
    mainPage.openCatalog();
    mainPage.linkValidation("catalog");
    mainPage.goBack();
    mainPage.linkValidation("royalstone");
  });

  it("Check the Call to Action button", () => {
    mainPage.callToActionValidation("Замовити дзвінок");
    mainPage.openForm();
    mainPage.formButtonValidation();
    mainPage.closeForm();
    mainPage.heroSectionValidation();
  });
});

describe("Check the Main Page on Mobile Screen", () => {
  beforeEach(() => {
    mainPage.navigate();
    viewport.mobileView();
  });

  it("Check the Blog Section", () => {
    mainPage.checkArticlesCount(3);
    mainPage.mobCheckArticlesCount();
    mainPage.checkBlogLink();
  });
});

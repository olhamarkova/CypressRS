/// <reference types="cypress" />

import { MainPage } from "../../page-object/page-object-main.js";

const mainPage = new MainPage();

describe("Check the main page", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.viewPort();
  });

  it("Check the messenger's menu", () => {
    mainPage.mesButtonValidation();
    mainPage.openMessengers();
    mainPage.checkMessengersCount(6);
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

    mainPage.openArticle();
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

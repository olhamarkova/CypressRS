/// <reference types="cypress" />

import { Blog } from "../../page-object/page-object-blog.js";

const blogPage = new Blog();

describe("Check the Blog Page", () => {
  beforeEach(() => {
    blogPage.navigate();
  });

  it.only("Check the Actual Articles Section", () => {
    blogPage.checkBigBlogItem(1);
    blogPage.checkSmallBlogItem(2);
  });

  it("Check the Count of Articles on the Main Blog Page", () => {
    blogPage.checkArticlesCount(6);
    blogPage.openMore();
    blogPage.checkArticlesCount(12);
  });

  it("Check the Article Page", () => {
    blogPage.openArticle(1);
    blogPage.checkArticleContent();
    blogPage.wait();
    blogPage.checkShareLinks(7);
    blogPage.checkPostNavPanel();
    blogPage.checkNavPanelLinks("prev");
    blogPage.checkNavPanelLinks("next");
    blogPage.checkPopularSection(3);
  });
});

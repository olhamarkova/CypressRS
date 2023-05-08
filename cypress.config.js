const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://test.andygroove.com/royalstone/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.cy.js",
  },
});

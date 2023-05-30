const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ftt4p6",
  env: {
    url: "https://granit-royalstone.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.cy.js",
    watchForFileChanges: false,
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {   
  baseUrl: 'https://reqres.in/',
  defaultCommandTimeout: 10000,
  authToken: '',
  // reporter: 'mocha-junit-reporter',
  // reporterOptions: {
  //   mochaFile: 'results/junit/test-results.[hash].xml', // Save reports in 'results/junit/' folder
  //   toConsole: true
  // },
  retries: {
    runMode: 1,
    openMode: 0,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});

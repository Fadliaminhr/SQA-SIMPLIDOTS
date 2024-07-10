// const { defineConfig } = require("cypress");
// require('cypress-xpath');


// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
//   watchForFileChanges: false
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js' // atau 'cypress/support/index.js' tergantung pada file support yang Anda gunakan
  },
  // watchForFileChanges: false
});


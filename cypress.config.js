const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
const dotenvPlugin = require('cypress-dotenv');
dotenv.config();


module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {


      return config;

    },
    // env: {

    //   USERNAME: process.env.CYPRESS_USERNAME,
    //   PASSWORD: process.env.CYPRESS_PASSWORD
    // }

  },
});

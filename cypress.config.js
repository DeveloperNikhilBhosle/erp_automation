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
    env: {
      // Nikhil
      EMAIL: process.env.CYPRESS_ERP_LOGIN,
      PASSWORD: process.env.CYPRESS_ERP_PASSWORD
    }

  },
});

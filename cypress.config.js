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

      USERNAME: "nikhil.bhosle@atriina.com ",
      PASSWORD: ""
    }

  },
});

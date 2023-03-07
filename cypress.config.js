const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'qzv74o',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://google.com',
    excludeSpecPattern: ['/**/1*/**.js', '/**/2*/**.js'],
    experimentalStudio: true
  },
})

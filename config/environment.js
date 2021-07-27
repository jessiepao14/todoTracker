'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'emtasks',
    environment,
    contentSecurityPolicy: { 'connect-src': "'self' wss://*.firebaseio.com" },
    firebase: {
      apiKey: 'AIzaSyCXhG5bwinMkP-Lx26eg-_YiuWgM_A2lcY',
      authDomain: 'emtasks-7e97e.firebaseapp.com',
      databaseURL: 'https://emtasks-7e97e-default-rtdb.firebaseio.com',
      projectId: 'emtasks-7e97e',
      storageBucket: 'emtasks-7e97e.appspot.com',
      messagingSenderId: '889476853717',
      appId: '1:889476853717:web:ed7d7cc5e03f046d16d75c',
      measurementId: 'G-YZMFW7J3QQ',
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};

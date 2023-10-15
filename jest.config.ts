// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // or 'node' or other appropriate environment
  globals: {
    // Global variables used in your tests
    // For example, if you use a global variable like 'expect' from Jest
    "jest/globals": true,
  },
};

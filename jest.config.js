const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Provide the path to your Next.js app
});

const customJestConfig = {
  testEnvironment: "jsdom", // Needed for testing React components
  clearMocks: true, // Clears mock data between tests
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8", // Uses V8 for faster coverage reports

  moduleNameMapper: {
    // Mock CSS, SCSS, and image imports
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Ensures Jest DOM matchers are available

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Uses Babel for transforming JS/JSX files
  },

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],

  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

module.exports = createJestConfig(customJestConfig);

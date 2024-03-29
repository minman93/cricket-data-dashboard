const nextJest = require("next/jest");

const createJestConfig = nextJest({});

/**@type {import ("jest").Config} */

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  verbose: true,
};

module.exports = createJestConfig(config);

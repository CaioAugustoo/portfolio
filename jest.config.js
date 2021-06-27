module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/pages/**/*.tsx",
    "!src/styles/**/*.ts",
    "!src/pages/**/*.tsx",
    "!src/styles/**/*.ts",
    "!src/types/**/*.ts",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/", "<rootDir>.jest"],
};

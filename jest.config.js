const nextJest = require("next/jest");
const createJestConfig = nextJest({
    dir: "./",
});

module.exports = createJestConfig({
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jsdom",
    collectCoverageFrom: [
        "src/**/*.ts",
        "src/**/*.tsx",
    ],
    coverageReporters: [
        "json",
        "text-summary",
    ],
    coverageDirectory: "coverage",
});

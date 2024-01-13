// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: [
//     "src/**/*.{ts,tsx}",
//     "!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx} ",
//   ],
//   coveragePathIgnorePatterns: [
//     "node_modules",
//     "test-config",
//     "interfaces",
//     "jestGlobalMocks.ts",
//     ".module.ts",
//     "<rootDir>/src/app/main.ts",
//     ".mock.ts",
//   ],
//   coverageDirectory: "coverage",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
// };
export default {
  preset: "ts-jest",
  testEnvironment: "JSDOM",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
  },
};

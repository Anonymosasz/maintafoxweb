import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^next/(.*)$': '<rootDir>/node_modules/next/$1',
    '^next$': '<rootDir>/node_modules/next',
  },
};

export default config;

import config from './jest.config';

export default {
  ...config,

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/*.spec.ts'],
};

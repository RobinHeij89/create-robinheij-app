export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx'
  ],
  testPathIgnorePatterns: [
    'node_modules'
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@generated/(.*)$': '<rootDir>/generated/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@i18n/(.*)$': '<rootDir>/i18n/$1',
    '^@icons/(.*)$': '<rootDir>/icons/$1',
    '^@misc/(.*)$': '<rootDir>/misc/$1',
    '^@theme/(.*)$': '<rootDir>/theme/$1'
  }
}

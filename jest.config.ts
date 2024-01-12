import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    '/node_modules/',
    '/out/',
    '/dist/',
    '/lib/'
  ],
  collectCoverage: false,
}

export default config

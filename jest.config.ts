export default {
    rootDir: 'src',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/config/jest/fileMock.ts',
      '^.+\\.(css|less|scss|sass)$': '<rootDir>/config/jest/styleMock.ts',
      '@testing-library/jest-dom/extend-expect': '@testing-library/jest-dom',
      "^@/(.*)$": "<rootDir>/$1"
    },
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleFileExtensions: [
      'tsx',
      'ts',
      'web.js',
      'js',
      'web.ts',
      'web.tsx',
      'json',
      'web.jsx',
      'jsx',
      'node',
    ],
    modulePaths: ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            diagnostics: {
              ignoreCodes: [1343],
            },
            astTransformers: {
              before: [
                {
                  path: 'node_modules/ts-jest-mock-import-meta',
                  options: {
                    metaObjectReplacement: {
                      env: {
                        VITE_BASE_API: "https://dummyjson.com"
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
    },
};
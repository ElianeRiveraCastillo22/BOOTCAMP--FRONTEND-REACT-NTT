export default {
    rootDir: 'src',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
/*     transform: {
      '^.+\\.tsx?$': 'ts-jest',
      // process `*.tsx` files with `ts-jest`
    }, */
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/config/jest/fileMock.ts',
      '^.+\\.(css|less|scss|sass)$': '<rootDir>/config/jest/styleMock.ts',
      '@testing-library/jest-dom/extend-expect': '@testing-library/jest-dom',
      "^@/(.*)$": "<rootDir>/$1"
    },
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleFileExtensions: [
      // Place tsx and ts to beginning as suggestion from Jest team
      // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
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
                        // Replicate as .env.local
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
/*     globals: {
        'ts-jest': {
          useESM: true,      // Asegúrate de que ts-jest use ESM
          tsconfig: 'tsconfig.json' // Apunta a tu tsconfig
        }
      }, */
};
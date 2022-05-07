export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
    globals: {
        'ts-jest': {
            tsconfig: {
                rootDir: './src',
            },
        },
    },
};

export default {
    roots: ['<rootDir>/tests/unit'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~/(.*)$': '<rootDir>/src/components/$1',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

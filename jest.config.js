export default {
    roots: ['<rootDir>/tests/unit'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~/(.*)$': '<rootDir>/src/components/$1',
        '\\.(css|less|scss)$': '<rootDir>/tests/styleMock.js',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

export default {
    roots: ['<rootDir>/tests/unit'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/main/react/$1',
        '^@/(.*)$': '<rootDir>/src/main/rest/$1',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['cjs/src/**/*.js'],
    moduleFileExtensions: ['js'],
    rootDir: 'build',
    testEnvironment: 'node',
    testRegex: 'cjs/test/(.+)\\.test\\.js',
    verbose: true,
};

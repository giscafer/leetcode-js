
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [[1, 3, 5, 6], 5],
        output: 2
    },
    {
        input: [[1, 3, 5, 6], 2],
        output: 1
    },
    {
        input: [[1, 3, 5, 6], 7],
        output: 4
    },
    {
        input: [[1, 3, 5, 6], 0],
        output: 0
    }
];

describe('035-search-insert-position', () => {
    it('testcase should be equals', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});
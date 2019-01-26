
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [[1, 2, 3]],
        output: [1, 2, 4]
    },
    {
        input: [[4, 3, 2, 1]],
        output: [4, 3, 2, 2]
    },
    {
        input: [[9]],
        output: [1, 0]
    },
    {
        input: [[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]],
        output: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
    },
    {
        input: [[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]],
        output: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 5, 0]
    },
    {
        input: [[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 9, 9, 9, 9]],
        output: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 1, 0, 0, 0, 0]
    },
    {
        input: [[9, 9, 9]],
        output: [1, 0, 0, 0]
    }
];

describe('066-plus-one', () => {
    it('testcase should be equals', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});
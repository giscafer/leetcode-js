
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
        output: 6
    },
    {
        input: [[1, 3, 5, 6]],
        output: 15
    },
    {
        input: [[-1]],
        output: -1
    },
    {
        input: [[-1, -2]],
        output: -1
    }
];

describe('053-maximum-subarray', () => {
    it('testcase should be equals', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});
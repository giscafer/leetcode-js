
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [[1, 1, 2], 1],
        output: 1
    },
    {
        input: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 1],
        output: 7
    },
    {
        input: [[0, 1, 2, 2, 3, 0, 4, 2], 2],
        output: 5
    }
];

describe('027-remove-element', () => {
    it('testcase should be equals', () => {
        testCases.forEach((testcase, index) => {
            // console.log(index)
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});
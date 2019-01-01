
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [[1, 1, 2]],
        output: 2
    },
    {
        input: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]],
        output: 5
    }
];

describe('026-remove-duplicates-from-sorted-array', () => {
    it('testcase should be equals', () => {
        testCases.forEach((testcase, index) => {
            // console.log(index)
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});

const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: ["hello!", "ll"],
        output: 2
    },
    {
        input: ["aaaaa", "bba"],
        output: -1
    },
    {
        input: ["a", "a"],
        output: 0
    }
];

describe('028-implement-strstr', () => {
    it('testcase should be equals', () => {
        testCases.forEach((testcase, index) => {
            // console.log(index)
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});
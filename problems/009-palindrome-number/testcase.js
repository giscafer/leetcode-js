
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [123],
        output: false
    },
    {
        input: [-121],
        output: false
    },
    {
        input: [121],
        output: true
    },
    {
        input: [2],
        output: true
    },
    {
        input: [20],
        output: false
    },
    {
        input: [212212],
        output: true
    }
];

describe('009-palindrome-number', () => {
    it('testcase should be equals', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});
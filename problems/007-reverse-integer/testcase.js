
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [123],
        output: 321
    },
    {
        input: [-123],
        output: -321
    },
    {
        input: [120],
        output: 21
    },
    {
        input: [1534236469],
        output: 0
    },
    {
        input: [-2147483648],
        output: 0
    },
    {
        input: [1463847412],
        output: 2147483641
    }
];

describe('007-reverse-integer', () => {
    it('testcase should be', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});
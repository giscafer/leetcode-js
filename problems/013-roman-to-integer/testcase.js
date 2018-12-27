
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: ['III'],
        output: 3
    },
    {
        input: ['IV'],
        output: 4
    },
    {
        input: ['IX'],
        output: 9
    },
    {
        input: ['LVIII'],
        output: 58
    },
    {
        input: ['MCMXCIV'],
        output: 1994
    },
    {
        input: ['MCCCXIV'],
        output: 1314
    },
    {
        input: ['DXX'],
        output: 520
    },
    {
        input: ['MMCCCXCIX'],
        output: 2399
    },
    {
        input: ['MI'],
        output: 1001
    },
    {
        input: ['XI'],
        output: 11
    }
];

describe('013-roman-to-integer', () => {
    it('testcase should be equals', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});
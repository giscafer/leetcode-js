
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: ['()'],
        output: true
    },
    {
        input: ['()[]{}'],
        output: true
    },
    {
        input: ['[()]'],
        output: true
    },
    {
        input: ['[({})]'],
        output: true
    },
    {
        input: ['{[[[{()}]]]}'],
        output: true
    },
    {
        input: ['(]'],
        output: false
    },
    {
        input: ['([)]'],
        output: false
    }
];

describe('020-valid-parentheses', () => {
    it('testcase should be equals', () => {
        testCases.forEach((testcase,index) => {
            // console.log(index)
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});